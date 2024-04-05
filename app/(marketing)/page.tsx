import Link from "next/link";
import { Loader } from "lucide-react";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <section className="max-w-screen-lg mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-6 gap-6">
            <div className="relative w-64 h-64 lg:w-[480px] lg:h-[424px] mb-8 lg:mb-0">
                <Image src="/hero.svg" fill alt="hero" />
            </div>
            <section className="flex flex-col items-center gap-y-6">
                <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
                    Hi, my name is <span className="font-extrabold text-green-500">Dayne Tran</span>.
                </h1>
                <p className="text-base lg:text-xl font-semibold text-neutral-600 max-w-[480px] text-center">
                    Welcome to my education platform, <span className="text-green-500 font-bold">TranLingo</span>. Learn, practice, and master the languages that have shaped who I am today.
                </p>
                <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedOut>
                            <SignUpButton
                                mode="modal"
                                afterSignInUrl="/learn"
                                afterSignUpUrl="/learn"
                            >
                                <Button size="lg" variant="secondary" className="w-full">
                                    Get started
                                </Button>
                            </SignUpButton>
                            <SignInButton
                                mode="modal"
                                afterSignUpUrl="/courses"
                                afterSignInUrl="/courses"
                            >
                                <Button size="lg" variant="primaryOutline" className="w-full">
                                    I already have an account
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <Button size="lg" variant="secondary" className="w-full" asChild>
                                <Link href="/learn">
                                    Continue learning
                                </Link>
                            </Button>
                        </SignedIn>
                    </ClerkLoaded>
                </div>
            </section>
        </section>
    )
}
