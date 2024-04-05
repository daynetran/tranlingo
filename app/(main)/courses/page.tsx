import { getCourses, getUserProgress } from "@/db/queries";

import { List } from "./list";

const CoursesPage = async () => {
    const courses = await getCourses();
    const userProgress = await getUserProgress();

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <p className="text-base text-neutral-700 pt-6">
                My mother and her family came from Seoul, South Korea, to the United States in 1986.
                In her teenage years, she quickly learned to integrate her Korean heritage with
                her new American surroundings. In turn, she made sure to share her culture with my brother and I, raising us on
                weekend school lessons, memorable bedtime lullabies and stories, and delicious amounts of gimbap (김밥), tteokguk (떡국), and more.
                <br /> <br />
                My father and his family traveled from Saigon, Vietnam, to the United States in 1980, with only a hundred dollars to their name.
                They built decent, respectable lives for themselves in the New England area, and they too never forgot their heritage. My father
                brought my brother and I many times to Little Saigon in Garden Grove, to see the Lunar New Year's celebrations, indulge in delicious Phở, and
                immerse ourselves in Vietnamese culture.
                <br /> <br />
                Lastly, my uncle married his wife in Amsterdam, Netherlands in 2008 and invited my family to the wedding. It is my fondest of my early trips abroad.
                I was entranced by the sea of home-fitted boats, the many beautiful colors and angles of the city, and the lovely atmosphere of a wonderful wedding.
                Dutch, and the people who speak it, will always hold a special place in my heart.
                <br /> <br />
                <span className="text-lg font-semibold">Learn the languages from around the world that have shaped who I am today.</span>
            </p>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div >
    )
}

export default CoursesPage;
