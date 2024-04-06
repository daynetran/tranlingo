
"use client"
import { Loader, Menu } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export const MobileSidebar = () => {
    const pages = ["learn", "courses", "leaderboard", "quests", "shop"]

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="flex h-full lg:w-[256px] border-r-2 flex-col">
                <SheetHeader>
                    <SheetTitle >
                        <div className="pl-4 flex items-center gap-x-3">
                            <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                            <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                                TranLingo
                            </h1>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-y-2 flex-1">
                    {pages.map((p) => {
                        const isActive = usePathname() === `/${p}`
                        return (
                            <SheetClose asChild>
                                <Button
                                    variant={isActive ? "sidebarOutline" : "sidebar"}
                                    className="justify-start h-[52px]"
                                    asChild
                                >
                                    <Link href={`/${p}`} className="w-full flex justify-start items-end">
                                        <Image
                                            src={`/${p}.svg`}
                                            alt={p}
                                            className="mr-5"
                                            width={32}
                                            height={32}
                                        />
                                        {p}
                                    </Link>
                                </Button>
                            </SheetClose>
                        )
                    })}
                    { /** SheetClose only works when Button is directly below it :(
                        <SheetClose asChild>
                            <SidebarItem
                                href="/shop"
                                iconSrc="/shop.svg"
                                label="SHOP"
                            />
                        </SheetClose>
                        */
                    }
                </div>
                <SheetFooter>
                    <div className="p-4">
                        <ClerkLoading>
                            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                        </ClerkLoading>
                        <ClerkLoaded>
                            <UserButton afterSignOutUrl="/" />
                        </ClerkLoaded>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet >
    )
}
