import Navbar from "@/app/_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <Navbar />;
};

export default SubscriptionPage;
