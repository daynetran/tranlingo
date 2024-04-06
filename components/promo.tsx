import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Promo = () => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex justify-start items-end gap-x-4">
                    <Image
                        src="/man.svg"
                        alt="Me"
                        height={26}
                        width={26}
                        className="hidden lg:block"
                    />
                    <h3 className="font-bold text-base lg:text-lg">
                        Do you like what you see?
                    </h3>
                </div>
                <p className="text-muted-foreground text-md lg:text-base">
                    Visit daynetran.com to explore my writings, projects, and more related to software engineering.
                </p>
            </div>
            <Button
                variant="super"
                className="w-full"
                size="lg"
                asChild
            >
                <Link
                    href="https://daynetran.com"
                    target="_blank"
                >
                    Visit My site! <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
            </Button>
        </div>
    )
}
