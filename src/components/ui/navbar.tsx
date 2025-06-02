"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import Logo from "./logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full justify-items-center">
      <nav className="custom-container flex w-full flex-row items-center justify-between">
        <Link href="/" className="relative size-16">
          <Logo />
        </Link>

        <ModeToggle />
      </nav>
    </header>
  );
}
