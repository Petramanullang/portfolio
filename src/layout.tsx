// src/layout.tsx
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-black">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <AppSidebar />

        <SidebarTrigger className="md:sticky absolute top-3 bg-transparent! border-none! hover:border-none! active:border-none! focus:border-none! focus:outline-0! md:block" />

        <main className="flex-1 min-w-0 w-full mt-15">{children}</main>
      </ThemeProvider>
    </div>
  );
};
