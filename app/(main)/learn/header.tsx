import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
type Props = {
    title: string;
    imageSrc: string;
}

export const Header = ({ title, imageSrc }: Props) => {
    return (
        <div className="flex flex-col items-center border-b-2 mb-5 pb-3">
            <div className="flex flex-col items-center">
                <Image
                    src={imageSrc}
                    alt={title}
                    height={90}
                    width={90}
                    className="rounded-md"
                />
                <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                    Learn {title}
                </h1>
                <p className="text-muted-foreground text-center text-lg mb-6">
                    Practice and test your language skills!
                </p>
            </div>
            <div className="flex w-full justify-between">
                <Link href="/courses">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="h-5 w-5 stroke-2 text-slate-500" />
                        back to courses
                    </Button>
                </Link>
                <h1 className="text-slate-500 font-bold text-lg">
                    {title}
                </h1>
            </div>
        </div>
    )
}
