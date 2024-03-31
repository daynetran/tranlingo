'use client'

import { useState } from "react";

import { challengeOptions, challenges } from "@/db/schema"

import { Header } from "./header";

type Props = {
    initialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    iniitialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubscription: any; // TODO :Replace with subscrptino db type
}

const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    iniitialLessonChallenges,
    userSubscription
}: Props) => {

    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(50 | initialPercentage);

    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
        </>
    )
}

export default Quiz;
