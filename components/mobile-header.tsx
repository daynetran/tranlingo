import { MobileMenu } from "./mobile-menu"
import { MobileSidebar } from "./mobile-sidebar"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center justify-between bg-green-500 border-b fixed top-0 w-full z-50">
            <MobileSidebar />
            <MobileMenu />
        </nav>
    )
}
