import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = ({setShowCheckoutForm}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://book-store-qivu.onrender.com/stripe/charge",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true);
          setShowCheckoutForm(false);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="paymentService">
      {!messageSuccess ?
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement className="cardElement"/>
      <button>Оплатить</button>
    </form>
    :
    <div>
      <h1>Оплата прошла успешно!</h1>
    </div>
    }
    </div>
)};