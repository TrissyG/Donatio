import dotenv from "dotenv";

dotenv.config();

(function checkProcessEnvIntegrity() {
  if (process.env.ENVIRONMENT !== "PROD" && process.env.ENVIRONMENT !== "DEV") {
    throw Error(
      `.env: ENVIRONMENT needs to be "PROD" or "DEV". Received: "${process.env.ENVIRONMENT}"`
    );
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error(
      `.env: STRIPE_SECRET_KEY is required. Received: "${process.env.STRIPE_SECRET_KEY}"`
    );
  }
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error(
      `.env: STRIPE_WEBHOOK_SECRET is required. Received: "${process.env.STRIPE_WEBHOOK_SECRET}"`
    );
  }
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error(
      `.env: STRIPE_PUBLIC_KEY is required. Received: "${process.env.STRIPE_PUBLIC_KEY}"`
    );
  }
})();

export const { ENVIRONMENT, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PUBLIC_KEY } =
  process.env;
