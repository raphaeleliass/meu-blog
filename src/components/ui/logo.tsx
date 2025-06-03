"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Logo() {
  const [logo, setLogo] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      const logoHandler =
        resolvedTheme === "dark" ? "/logo-dark.png" : "/logo.png";
      setLogo(logoHandler);
    }
  }, [resolvedTheme]);
  return (
    <>
      {logo && (
        <Image
          src={logo}
          alt="logo do blog"
          fill
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      )}
    </>
  );
}
