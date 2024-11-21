import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/_lib/prisma";
import { endOfMonth, startOfMonth } from "date-fns";

export const getCurrentMonthTransactions = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("No user logged in");
  }

  return db.transaction.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(new Date()),
        lt: endOfMonth(new Date()),
      },
    },
  });
};
