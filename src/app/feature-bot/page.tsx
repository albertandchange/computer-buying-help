"use client";

import { Standard } from '@typebot.io/react';
import { motion } from "motion/react";

export default function Page() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className='container mx-auto '
        >
            <div className='container mx-auto pt-30'>
                <h1></h1>
                <Standard
                    typebot="computer-criteria-find-your-criteria-hjcifh9"
                    apiHost="https://typebot.io"
                    style={{ width: '100%', height: '600px' }} />
            </div>
        </motion.section>

    );
};