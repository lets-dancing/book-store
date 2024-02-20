// Этот компонент React интегрирует Stripe для обработки платежей. Он использует публичный ключ для создания экземпляра Stripe и оборачивает форму оплаты CheckoutForm в компонент Elements от Stripe.

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import "./Stripe.css";

const PUBLIC_KEY = "pk_test_51OJwh2CQLE4k49NbuoIWUIPKrPk3WBBgww0bvYGQ9PIaLdfQKgR705bkeL8zKs8e60q37UmDMCHFVTa6DXQrHHsq00dr6JuOab";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Stripe;