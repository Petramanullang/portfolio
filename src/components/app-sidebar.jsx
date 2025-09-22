"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Home,
  FolderKanban,
  User,
  Mail,
  Settings,
  Github,
  Linkedin,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  const menuItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "Projects", url: "/projects", icon: FolderKanban },
    { title: "About", url: "/about", icon: User },
    { title: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="bg-black transition-all duration-300 ease-in-out data-[collapsible=icon]:w-[64px]">
      {/* HEADER */}
      <SidebarHeader>
        <a href="/" className="flex items-center gap-2 px-2 py-2">
          {/* Full logo (shown when sidebar is expanded) */}
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-8 w-8 group-data-[collapsible=icon]:hidden"
          />

          {/* Collapsed version (shown when sidebar is collapsed) */}
          <div className="hidden group-data-[collapsible=icon]:block text-white font-bold rounded-full w-8 h-8 items-center justify-center">
            P
          </div>

          {/* Text label */}
          <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden translate-y-[2px] translate-x-[2px]">
            Welcome
          </span>
        </a>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="overflow-hidden">
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5 space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="w-[90%] ml-3" />

        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Socials
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5 space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="GitHub">
                  <a
                    href="https://github.com/Petramanullang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      GitHub
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/petra-juliansen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      LinkedIn
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton tooltip="Settings">
                  <img
                    src="/react.svg"
                    alt="Avatar"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Settings
                  </span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="start"
                className="w-[--radix-popper-anchor-width]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
    </Sidebar>
  );
}
