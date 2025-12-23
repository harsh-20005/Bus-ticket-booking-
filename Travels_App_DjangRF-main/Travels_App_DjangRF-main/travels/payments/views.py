from django.shortcuts import render


import razorpay
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

@api_view(['POST'])
def create_order(request):
    amount = request.data.get('amount')  
    amount_paise = int(float(amount) * 100)  

    payment = client.order.create({
        "amount": amount_paise,
        "currency": "INR",
        "payment_capture": 1
    })


    return Response({
        "order_id": payment['id'],
        "amount": payment['amount'],
        "currency": payment['currency'],
        "key_id": settings.RAZORPAY_KEY_ID
    })


