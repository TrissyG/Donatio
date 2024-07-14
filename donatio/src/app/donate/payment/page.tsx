"use client";

import React, { useCallback, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export default function Page() {
  const [showCheckout, setShowCheckout] = useState(true);
  const stripePromise = loadStripe(
    "pk_test_51PD2m6JDy0EQaCxflgNFtIrpdcvtFH8JAgU5O86ESXhs5lDGkvhccqazWFI1TnyLrw2ZZbeC56qYfFyckrNQfGYI008fJy5hvh"
  );

  const router = useRouter();

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: "price_1OtHkdBF7AptWZlcIjbBpS8r" }),
    });
    const data = await res.json();
    return data.client_secret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <div className="p-4 shadow-lg">
        {showCheckout && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
      <Button
        className="absolute top-20 left-4"
        onClick={() => router.push("/donate")}
      >
        <ChevronLeft className="h-4" />
      </Button>
    </div>
  );
}
