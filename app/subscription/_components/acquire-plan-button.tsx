"use client";
import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "@/app/subscription/_actions/create-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/shared/react";
import Link from "next/link";

const AcquirePlanButton = () => {
  const { user } = useUser();

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

  const hasPremium = user?.publicMetadata.subscriptionPlan === "premium";
  if (hasPremium) {
    return (
      <Button className="round-full w-full font-bold" variant="link">
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
        >
          Gerenciar Plano
        </Link>
      </Button>
    );
  }
  return (
    <Button
      className="round-full w-full font-bold"
      onClick={handleAcquirePlanClick}
    >
      Adiquirir plano
    </Button>
  );
};

export default AcquirePlanButton;
