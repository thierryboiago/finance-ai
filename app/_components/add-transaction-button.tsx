"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

import React, { useState } from "react";
import UpsertTransactionsDialog from "@/app/_components/upsert-transactions-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>

      <UpsertTransactionsDialog
        setIsOpen={setDialogIsOpen}
        isOpen={dialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
