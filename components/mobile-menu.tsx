import { ChevronLeft } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";

import { redirect } from "next/navigation";
import { UserProgress } from "./user-progress";
import { Promo } from "./promo";
import { Quests } from "./quests";
import { getUserProgress } from "@/db/queries";

export const MobileMenu = async () => {
    const userProgress = await getUserProgress();

    if (!userProgress || !userProgress.activeCourse) {
        return;
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="text-white flex font-bold justify-end">
                    <ChevronLeft className="text-white" />
                </div>
            </SheetTrigger>
            <SheetContent side="right" className="flex h-full lg:w-[256px] flex-col overflow-auto">
                <SheetHeader>
                </SheetHeader>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
                <Promo />
                <Quests points={userProgress.points} />
            </SheetContent>
        </Sheet >
    )
}
