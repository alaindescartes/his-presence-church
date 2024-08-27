// app/checkout/page.js
"use client";

import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../../../lib/stripe";
import CheckoutForm from "../_components/CheckoutForm";

const CheckoutPage = () => {
  const stripe = getStripe();

  return (
    <div>
      <Elements stripe={stripe}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
