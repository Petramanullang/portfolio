import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="flex min-h-screen w-full bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Sidebar */}
          {/* <SidebarProvider> */}
          <AppSidebar />
          <SidebarTrigger className="md:sticky absolute top-3 bg-transparent! border-none! hover:border-none! active:border-none! focus:border-none! focus:outline-0! md:block" />
          {/* </SidebarProvider> */}
          <div className="mt-15">{children}</div>
        </ThemeProvider>
      </div>
    </div>
  );
};
