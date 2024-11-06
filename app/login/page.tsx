import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = auth();
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="logo.svg"
          className="mb-8"
          alt=" Finance AI"
          height={39}
          width={173}
        />
        <h1 className="mb-3 text-4xl font-bold">Bem vindo</h1>
        <p className="mb-8 text-muted-foreground">
          finance.ai Bem-vindo A Finance AI é uma plataforma dee gestão
          financeira que utiliza IA para monitorar suas movimentações, e
          oferecer insights personalizados, facilitando o controle do seu
          orçamento. Entrar com Google
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer Login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
