"use client"

import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { POINTS_TO_REFILL } from "@/constants";

type Props = {
    hearts: number;
    points: number;
}


export const Items = ({
    hearts,
    points,
}: Props) => {
    const [pending, startTransition] = useTransition();

    const onRefillHearts = () => {
        if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
            return;
        }

        startTransition(() => {
            refillHearts()
                .catch(() => toast.error("Something went wrong"))
        });
    };

    return (
        <ul className="w-full">
            <div className="flex items-center w-full p-4  gap-x-4">
                <Image
                    src="/heart.svg"
                    alt="heart"
                    width={60}
                    height={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Use your points to refill hearts
                    </p>
                </div>
                <Button
                    onClick={onRefillHearts}
                    disabled={
                        hearts === 5
                        || pending
                        || points < POINTS_TO_REFILL
                    }
                >
                    {hearts === 5
                        ? "full"
                        : (
                            <div className="flex items-center">
                                <Image
                                    src="/points.svg"
                                    alt="Points"
                                    height={20}
                                    width={20}
                                />
                                <p>
                                    {POINTS_TO_REFILL}
                                </p>
                            </div>
                        )
                    }

                </Button>
            </div>
        </ul>
    )
}
