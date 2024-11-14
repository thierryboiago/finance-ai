"use client";
import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "@/app/subscription/_actions/create-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Missing stripe publishable key");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error("Stripe not loaded");
    }
    await stripe.redirectToCheckout({
      sessionId,
    });
  };
  return (
    <Button
      className="round-full w-full font-bold"
      onClick={handleAcquirePlanClick}
    >
      {" "}
      Adiquirir plano
    </Button>
  );
};

export default AcquirePlanButton;
