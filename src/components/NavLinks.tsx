"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "references",
        path: "/references",
    },
    {
        name: "feature-bot",
        path: "/feature-bot",
    },
    {
        name: "quick-guide",
        path: "/quick-guide",
    },
]

const NavLinks = ({ containerStyles }: { containerStyles: string }) => {
    const pathname = usePathname();
    return (
        <ul className={containerStyles}>
            {links.map((link, index) => {
                // check if the current path matches the link path
                const isActive = pathname === link.path;
                // determmine the number of characters in the link name
                const charLength = link.name.length;
                // set the line width based on the character length
                const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";
                console.log(charLength);
                return (
                    <Link href={link.path} key={index} className={`relative text-lg uppercase text-white ${isActive && `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`}`}>
                        <span className="relative z-10">{link.name}</span>
                    </Link>
                );
            })
            }
            {/* <li>
            <Link href="/" className="hover:underline">
                Home
            </Link>
        </li>
        <li>
            <a href="/quick-guide" className="hover:underline">
                Quick Guide
            </a>
        </li>
        <li>
            <a href="/feature-bot" className="hover:underline">
                Feature Bot
            </a>
        </li>
        <li>
            <a href="/references" className="hover:underline">
                References
            </a>
        </li> */}
        </ul>
    );
};

export default NavLinks;