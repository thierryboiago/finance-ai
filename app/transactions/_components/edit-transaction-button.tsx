"use client";

import { PencilIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

import React, { useState } from "react";
import UpsertTransactionsDialog from "@/app/_components/upsert-transactions-dialog";
import { Transaction } from "@prisma/client";

interface EditTransactionsButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({
  transaction,
}: EditTransactionsButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>

      <UpsertTransactionsDialog
        setIsOpen={setDialogIsOpen}
        isOpen={dialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
