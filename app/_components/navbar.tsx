"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="pt flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
