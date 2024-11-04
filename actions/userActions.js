"use client"

import Razorpay from "razorpay"
import connectDB from "@/db/connectDb"
import User from "@/app/models/User"
import Payment from "@/app/models/Payment"

export const initiate = async(amount,to_username,paymentform) =>{
    await connectDB()
    var instance = new Razorpay({
        key_id: 'process.env.RAZORPAY_KEY',
        key_secret: 'process.env.RAZORPAY_SECRET',
      });

      let options = {
        amount: Number.parseInt(amount),
        Currency: "INR",
      }

      let x = instance.orders.create(options)

      await Payment.create({oid:x.id,amount:amount,to_username:to_username,name:paymentform.name,message:paymentform.message})
      return x
    }