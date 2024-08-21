import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
    return (
        <header className="flex justify-between items-center p-2 bg-gray-200">
            {/* Logo - left side */}
            <h1 className="text-4xl font-bold text-yellow-500">H.</h1>

            {/* Navigation - Right side */}
            <nav>

                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                            <ul>
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                    </SheetContent>
                </Sheet>

                <ul className="gap-x-4 hidden md:flex">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;