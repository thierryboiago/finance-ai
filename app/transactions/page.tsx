import { db } from "@/app/_lib/prisma";
import { Button } from "@/app/_components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "@/app/_components/ui/data-table";
import { transactionsColumns } from "@/app/transactions/_columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
