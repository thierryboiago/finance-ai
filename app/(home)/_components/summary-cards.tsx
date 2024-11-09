import React from "react";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumaryCard from "@/app/(home)/_components/sumary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardProps {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCardProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const investmentTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expanseTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const depositTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositTotal - investmentTotal - expanseTotal;
  return (
    <div className="space-y-6">
      <SumaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SumaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentTotal}
        />
        <SumaryCard
          icon={<TrendingUpIcon className="text-primary" size={16} />}
          title="Receita"
          amount={depositTotal}
        />
        <SumaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesa"
          amount={expanseTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
