import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const MainNav = () => {
  return (
    <nav className="w-full pt-16 flex flex-col items-center justify-center gap-6">
      {/* <div className="text-lg font-bold justify-center">Computer Buying Help</div> */}
      <Logo />
      <div className="flex flex-col h-full items-center justify-between">

        <NavLinks containerStyles="flex flex-col mx-auto gap-6" />
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
      </div>
    </nav>
  );
};

export default MainNav;