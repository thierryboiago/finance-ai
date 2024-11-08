import { db } from "@/app/_lib/prisma";

import { DataTable } from "@/app/_components/ui/data-table";
import { transactionsColumns } from "@/app/transactions/_columns";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import Navbar from "@/app/_components/navbar";
import { UserButton } from "@clerk/nextjs";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable
          columns={transactionsColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
      <UserButton showName />
    </>
  );
};

export default TransactionsPage;
