

import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Checkout = () => (
<div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pt-[96px] pb-16 space-y-10">
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-7 pr-20">
                <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                    Passenger Information
                </h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor='fullname' className='block mb-2 font-semibold'>
                            Fullname
                        </label>
                        <input type="text" id="fullname" placeholder='Enter name' name="fullname" className="w-full appearance-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>

                    <div>
                        <label htmlFor='email' className='block mb-2 font-semibold'>
                            Email address
                        </label>
                        <input type="email" id="email" placeholder='Enter email' name="email" className="w-full appearance-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                        <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                            You will get your tickets via this email address.
                        </small>
                    </div>

                    <div>
                        <label htmlFor='phone' className='block mb-2 font-semibold'>
                            Phone Number
                        </label>
                        <input type="number" id="phone" placeholder='Enter number' name="phone" className="w-full appearance-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>

                    <div>
                        <label htmlFor='altphone' className='block mb-2 font-semibold'>
                            Alternative Phone Number
                        </label>
                        <input type="number" id="altphone" placeholder='Enter number' name="altphone" className="w-full appearance-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>
                </form>
            </div>

            <div className='col-span-2 space-y-8'>
                <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
                    <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                        Your Booking Status
                    </h2>

                    <div className='space-y-6'>
                        <div>
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium mb-2">
                                Your Destination
                            </h6>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">From:</span>
                                    <span>Location1</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">To:</span>
                                    <span>Location4</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Arrive at:</span>
                                    <span>04:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Depart at:</span>
                                    <span>04:30 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <h6 className="text-neutral-700 dark:text-neutral-200 font-medium">
                                Total No. of Seat
                            </h6>
                            <h6 className="text-neutral-700 dark:text-neutral-200 font-medium">
                                10 <span className='text-xs'>(Driver side)</span>
                            </h6>
                        </div>

                        <div className="flex justify-between">
                            <h6 className="text-neutral-700 dark:text-neutral-200 font-medium">
                                Total Amount
                            </h6>
                            <h6 className="text-neutral-700 dark:text-neutral-200 font-medium">
                                Rs.5000
                            </h6>
                        </div>
                    </div>
                </div>

                <button className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2">
                    Proceed to Pay <FaArrowRightLong />
                </button>
            </div>
        </div>
    </div>
);

export default Checkout;
