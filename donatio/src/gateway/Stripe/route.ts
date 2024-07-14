// This handles web hook notifications from Stripe
import { STRIPE_WEBHOOK_SECRET } from "@/app/_config/env";
import { stripe } from "@/app/_config/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.text();

    // The signature verifies that the event was sent by Stripe
    const signature = headers().get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        {
          message: "No stripe signature",
        },
        {
          status: 400,
        }
      );
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET
    );

    // We only care about handling when the checkout session is completed
    if (event.type === "checkout.session.completed") {
        
      return NextResponse.json({ message: "Webhook handled successfully" });
    }
    // For any other event return a 200 response as soon as possible
    return NextResponse.json({ message: "Event ignored" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Unknown error handling Stripe webhook event",
      },
      { status: 500 }
    );
  }
}
