"use client";

import { Fragment } from 'react';
import { motion } from "motion/react";
import { Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            src="https://docs.google.com/document/d/e/2PACX-1vT9yOAnaF9M3RYzqeVFJThxYaA2lL5yE9g1aS9KnkA38s6pE4YvvDNHIiLyIdCZtZwe9hKOsf6IW5Cg/pub?embedded=true"
            className='googleDoc'
            allowFullScreen={true}
          ></iframe>

          <div className='md:hidden'>
            <p >Best viewed on desktop!</p>
            <Button asChild>
              <a href="https://docs.google.com/document/d/e/2PACX-1vT9yOAnaF9M3RYzqeVFJThxYaA2lL5yE9g1aS9KnkA38s6pE4YvvDNHIiLyIdCZtZwe9hKOsf6IW5Cg/pub?embedded=true">
                Go to Google Docs
              </a>
            </Button>
          </div>
        </div>

      </div>


    </motion.section>
  );
}