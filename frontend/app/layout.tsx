import "./globals.css";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {ClerkProvider} from '@clerk/nextjs';

export const metadata = {
  title: "My App",
  description: "Next.js version of React Router app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <TooltipProvider>
          {/* <Toaster /> */}
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
