import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QUESTS } from "@/constants";
import { Progress } from "@/components/ui/progress";

type Props = {
    points: number;
}

export const Quests = ({ points }: Props) => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex justify-start items-center gap-x-4">
                    <Image
                        src="/quests.svg"
                        alt="Me"
                        height={26}
                        width={26}
                    />
                    <h3 className="font-bold text-lg flex-1">
                        Quests
                    </h3>
                    <Link href="/quests">
                        <Button
                            size="sm"
                            variant="primaryOutline"
                            className="hidden lg:block"
                        >
                            View all
                        </Button>
                    </Link>
                </div>
                <p className="text-muted-foreground">
                    Complete lessons to earn XP, reach milestones, and master languages!
                </p>
            </div>
            <ul className="w-full space-y-4">

                {QUESTS.map((quest) => {
                    const progress = (points / quest.value) * 100;

                    return (
                        <div key={quest.title} className="flex items-center w-full p-4 gap-x-4 border-t-2">
                            <Image
                                src="/points.svg"
                                alt="Points"
                                width={60}
                                height={60}
                            />
                            <div className="flex flex-col gap-y-2 w-full">
                                <p className="text-neutral-700 text-xl font-bold">
                                    {quest.title}
                                </p>
                                <Progress value={progress} className="h-3" />
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
