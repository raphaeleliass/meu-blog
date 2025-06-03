import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <main>{children}</main>;
}
