export const LoadingCard = () => {
    return (
        <div className="h-full border-2 rounded-xl border-b-4  p-3 pb-6 min-h-[217px] min-w-[200px] animate-pulse flex justify-center items-center">
            <div className="w-[93px] h-[70px] rounded-xl bg-slate-200" />
        </div>

    )
}

const Loading = () => {
    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <p className="text-base text-neutral-700 pt-3">
                Learn the languages from across the world that have shaped who I am today.
            </p>
            <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
            </div>

        </div>
    )
}

export default Loading
