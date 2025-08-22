// app/dashboard/layout.tsx
"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />

                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
                        <div className="flex h-16 items-center justify-between px-6">
                            <div className="flex items-center gap-4">
                                <SidebarTrigger />
                                <div className="relative max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search..."
                                        className="pl-10 w-full md:w-80"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button variant="ghost" size="icon" className="relative">
                                    <Bell className="h-4 w-4" />
                                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-xs text-white flex items-center justify-center">
                                        3
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
