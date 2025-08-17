import { 
  CheckCircle, 
  Search, 
  TrendingUp, 
  User, 
  MessageSquare,
  BarChart3,
  Settings,
  LogOut 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { 
    title: "ATS Checker", 
    url: "/dashboard/ats-checker", 
    icon: CheckCircle,
    description: "Check ATS compatibility"
  },
  { 
    title: "Keywords Research", 
    url: "/dashboard/keywords", 
    icon: Search,
    description: "Find relevant keywords"
  },
  { 
    title: "Tech Trends", 
    url: "/dashboard/trends", 
    icon: TrendingUp,
    description: "Stay updated with trends"
  },
];

const secondaryItems = [
  { 
    title: "Profile", 
    url: "/dashboard/profile", 
    icon: User,
    description: "Manage your account"
  },
  { 
    title: "Feedback", 
    url: "/dashboard/feedback", 
    icon: MessageSquare,
    description: "Share your thoughts"
  },
];

export function AppSidebar({ currentPath = "/" }: { currentPath?: string }) {
  const { state } = useSidebar();
  // For Next.js: const pathname = usePathname();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="h-8 w-8 bg-gradient-primary rounded-lg flex-shrink-0"></div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-semibold">Applymate</span>
              <span className="text-xs text-muted-foreground">Job Application Helper</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Features */}
        <SidebarGroup>
          <SidebarGroupLabel>Main Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="w-full justify-start"
                  >
                    <div 
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => window.location.href = item.url}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="w-full justify-start"
                  >
                    <div 
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => window.location.href = item.url}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="p-4">
          {!collapsed ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">john@example.com</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" className="p-2">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}