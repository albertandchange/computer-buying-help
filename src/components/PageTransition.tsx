"use client";

import React from 'react'
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from 'next/navigation';

const PageTransitions = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
                    // animate={{ 
                    //     opacity: 0,
                    //     transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" }
                    //  }}
                    className="min-h-screen w-screen fixed top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>

    )
}

export default PageTransitions;