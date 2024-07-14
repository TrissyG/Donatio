import { NextResponse } from "next/server";
import { stripe } from "../../stripe/stripe";

export async function POST(request: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price_data: {
            currency: "NZD",
            product_data: {
              name: "Ticket",
            },
            unit_amount_decimal: String(Number(10) * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${request.headers.get(
        "origin"
      )}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
