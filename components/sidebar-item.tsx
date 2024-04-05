"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
    noCourses: boolean;
};

export const SidebarItem = ({
    label,
    iconSrc,
    href,
    noCourses,
}: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="justify-start h-[52px]"
            disabled={noCourses}
            asChild
        >
            <Link href={href} className="w-full flex justify-start items-center ">
                <Image
                    src={iconSrc}
                    alt={label}
                    className="mr-5"
                    width={32}
                    height={32}
                />
                {label}
            </Link>
        </Button>
    )
}
