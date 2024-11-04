"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Script from 'next/script';
import { initiate } from '@/actions/userActions';
import { useSession } from 'next-auth/react';

const PaymentPage = ({ username }) => {
    const { data: session } = useSession();
    const [paymentform, setpaymentform] = useState({})
    const handleChange = (e)=>{
        setpaymentform({...paymentform,[e.target.name]:e.target.value})
    }
    const pay = async (amount) => {
        let a = await initiate(amount,session?.user.name,paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GET ME A CHAI", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay/`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="cover w-full relative">
                <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1730678400&token-hash=AcvAVf7vmSGx4pf49nRRBMUYRnDjWDSx2BGTxvUbw-U%3D" alt="" />
                <div className='absolute rounded-full -bottom-20 right-[46%] border-white border-2 '>
                    <img className='rounded-full' width={120} height={120} src="https://wallpaperaccess.com/full/12525231.jpg" alt="cat" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-24 gap-2'>
                <div className='text-lg font-bold uppercase'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    creating animated art for VTT&apos;s
                </div>
                <div className='text-slate-400'>
                    9,719 members . 82 posts . $15,450/release
                </div>
                <div className="payment w-[90%] flex gap-3 mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg p-8 ">
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-5'>
                            <li className='my-4 items-center flex gap-2'>
                                {/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}
                                <img src="avatar.gif" width={33} className='rounded-full' alt="" />
                                <span>shubam donated <span className='font-bold text-yellow-300'>$30</span> with a message : I support You Bro , Lots of ❤️</span>
                            </li>
                            <li className='my-4 items-center flex gap-2'>
                                <img src="avatar.gif" width={33} className='rounded-full' alt="" />
                                <span>shubam donated <span className='font-bold text-yellow-300'>$30</span> with a message : I support You Bro , Lots of ❤️</span>
                            </li>
                            <li className='my-4 items-center flex gap-2'>
                                <img src="avatar.gif" width={33} className='rounded-full' alt="" />
                                <span>shubam donated <span className='font-bold text-yellow-300'>$30</span> with a message : I support You Bro , Lots of ❤️</span>
                            </li>
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='font-bold text-2xl my-5'>Make A Payment</h2>
                        <div className='flex flex-col gap-2'>
                            <input type="text" onChange={handleChange} value={paymentform.name} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input type="text" onChange={handleChange} value={paymentform.message} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input type="text" onChange={handleChange} value={paymentform.amount} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button className='p-3 rounded-lg bg-green-600 '>pay</button>
                        </div>

                        <div className='flex gap-2 mt-5'>
                            <button className='p-3 rounded-lg bg-slate-' onClick={()=>pay(1000)}>Pay ₹10</button>
                            <button className='p-3 rounded-lg bg-slate-' onClick={()=>pay(2000)}>Pay ₹20</button>
                            <button className='p-3 rounded-lg bg-slate-' onClick={()=>pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PaymentPage;
