"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      className='h-screen flex items-center'
    >



      <div className='container mx-auto pt-30'>
        <div className='flex flex-col xl:flex-row items-center gap-24 w-full'>
          <h1></h1>

          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vTQmT9eu3eM-FB5_Bwwgun1_Vspdg0KDTvnZJF4up449ADVBS8RnW5Lfi5fEge-diHyQJHjrzq55HAi/pub?embedded=true"
            className='googleDoc'
            allowFullScreen={true}
          ></iframe>

          <div className='md:hidden'>
            <p >Best viewed on desktop!</p>
            <Button asChild>
              <a href="https://docs.google.com/document/d/e/2PACX-1vTQmT9eu3eM-FB5_Bwwgun1_Vspdg0KDTvnZJF4up449ADVBS8RnW5Lfi5fEge-diHyQJHjrzq55HAi/pub?embedded=true">
                Go to Google Docs
              </a>
            </Button>
          </div>
        </div>

      </div>
    </motion.section>
  );
}