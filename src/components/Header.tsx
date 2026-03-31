// components
import Logo from './Logo';
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from 'react-icons/md';
import Link from 'next/link';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import NavLinks from './NavLinks';

const Header = () => {
    return (
        <header className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
            <div className="container mx-auto">
                <div className='flex items-center justify-between py-6'>
                    {/* logo */}
                    <Logo />
                    {/* nav mobile - (Sheet Component) */}
                    <Sheet>
                        <SheetTrigger className='cursor-pointer text-[30px] text-white'>
                            <CiMenuFries className='text-[28px]' />
                        </SheetTrigger>
                        <SheetContent
                            className='bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20'
                            side="left"
                        >
                            <SheetHeader>
                                <SheetTitle><Logo /></SheetTitle>
                                <SheetDescription className='sr-only'>
                                    navigation menu
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex-grow flex items-center justify-center">
                                <NavLinks containerStyles='flex flex-col gap-8 max-w-[150px]' />
                            </div>

                            {/* button for future functions */}
                            {/* <div>
                                <Link href="/feature-bot">
                                    <button className="btn btn-lg btn-tertiary mb-16">
                                        <div className="flex items-center gap-3">
                                            <span>Let's Get Started</span>
                                        </div>
                                    </button>
                                </Link>
                            </div> */}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header