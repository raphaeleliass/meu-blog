"use server";
import { ModeToggle } from "./mode-toggle";
import Logo from "./logo";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "./button";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="custom-container w-full mx-auto justify-items-center">
      <nav className="custom-container flex w-full flex-row items-center justify-between">
        <Link href="/" className="relative size-16">
          <Logo />
        </Link>

        <div className="flex flex-row gap-2">
          <ModeToggle />
          {session && (
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
