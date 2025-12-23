import React from 'react';
import axios from 'axios';


const PaymentsButton = ({ amount }) => {

  const loadRazorpay = async () => {
    console.log("Clicked, amount:", amount);

    try {
      const formattedAmount = parseFloat(amount).toFixed(2);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        'http://localhost:8000/api/payments/create-order/',
        { amount: formattedAmount }, 
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      console.log("Order Response:", res.data);

      const options = {
        key: res.data.key_id,
        order_id: res.data.order_id,
        name: "Travels Booking", 
        description: "Bus Ticket Payment",
        handler: function (response) {
          console.log("Payment success:", response);
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },

        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        },
      };

      console.log("Options:", options);

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);

      if (error.response) {
        console.error("Server responded:", error.response.data);
        alert(`Server error: ${error.response.status} — ${error.response.data.detail || 'Check console.'}`);
      } else if (error.request) {
        alert("Network error: No response from server.");
      } else {
        alert(`Unexpected error: ${error.message}`);
      }
    }
  };

  return (
    <button
      onClick={loadRazorpay}
      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Pay ₹{amount} only
    </button>
  );
};

export default PaymentsButton;




//  = key id
// = secrate
// MbxDlNF77uag5chbGZUlxOGC 