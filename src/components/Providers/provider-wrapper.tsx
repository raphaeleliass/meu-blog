import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

export default function ProviderWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster richColors />
      {children}
    </ThemeProvider>
  );
}
