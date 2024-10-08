// This is your test secret API key.
const stripe = require("stripe")(
  "pk_test_51PD2m6JDy0EQaCxflgNFtIrpdcvtFH8JAgU5O86ESXhs5lDGkvhccqazWFI1TnyLrw2ZZbeC56qYfFyckrNQfGYI008fJy5hvh"
);

const calculateOrderAmount = () => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 10;
};

export default async function handler(
  req: { body: { items: any } },
  res: { send: (arg0: { clientSecret: any }) => void }
) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "nzd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(paymentIntent);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
