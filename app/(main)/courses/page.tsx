import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { LoadingCard } from "./loading";

const CoursesPage = async () => {
    const courses = await getCourses();
    const userProgress = await getUserProgress();

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <p className="text-base text-neutral-700 pt-3">
                Learn the languages from across the world that have shaped who I am today.
            </p>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    )
}

export default CoursesPage;
