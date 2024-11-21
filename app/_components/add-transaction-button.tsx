"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

import React, { useState } from "react";
import UpsertTransactionsDialog from "@/app/_components/upsert-transactions-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {!userCanAddTransaction &&
              "Você não pode adicionar transações. Você precisa adiquirir um plano premium."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <UpsertTransactionsDialog
        setIsOpen={setDialogIsOpen}
        isOpen={dialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
