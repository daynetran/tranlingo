import { redirect } from "next/navigation";
import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

import { Header } from "./header";
import { Unit } from "./unit";

const LearnPage = async () => {
    const userProgress = await getUserProgress();
    const units = await getUnits()
    const courseProgress = await getCourseProgress();
    const lessonPercentage = await getLessonPercentage()

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    if (!courseProgress) {
        redirect("/courses")
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
                <Promo />
                <Quests points={userProgress.points} />
            </StickyWrapper>
            <FeedWrapper>

                <Header title={userProgress.activeCourse.title} imageSrc={userProgress.activeCourse.imageSrc} />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;
