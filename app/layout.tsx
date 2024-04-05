import { Nunito } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/heart-modal";
import { PracticeModal } from "@/components/modals/practice-modal";
import type { Metadata } from "next";

import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TranLingo",
    description: "Learn the languages integral to my Asian American heritage",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={font.className}>
                    <Toaster />
                    <HeartsModal />
                    <PracticeModal />
                    <ExitModal />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
