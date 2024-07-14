"use client"

import React from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_PUBLIC_KEY } from "@/app/_config/env";
import CheckoutForm from "../../_components/CheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY as string);

export default function Page() {
    const [clientSecret, setClientSecret] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/gateway/Stripe/createPaymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance: StripeElementsOptions['appearance'] = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
        {clientSecret !== undefined ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <div>Loading...</div> // Fallback UI while clientSecret is undefined
      )}
    </div>
  );
}