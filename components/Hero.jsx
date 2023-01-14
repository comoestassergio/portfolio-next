import React from "react"
import Link from "next/link"
import { motion as m } from 'framer-motion'
import Image from "next/image"

const Hero = ({ firstName, lastName, title, text }) => {
    return (
        <m.div initial={{opacity: 0, scale: 0.8}} 
                animate={{opacity: 1, scale: 1}} 
                exit={{opacity: 0}}
                className="absolute h-full w-full flex flex-col justify-center pl-4 md:max-w-lg md:ml-16 lg:max-w-xl"
            >
                <h1 className="text-5xl max-w-sm md:max-w-lg md:text-8xl lg:text-9xl lg:uppercase">
                    <span className="text-gray-600 overflow-hidden dark:text-gray-400">{firstName}</span> <span className="font-bold dark:bg-clip-text dark:animate-gradient-glow dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-transparent">{lastName}</span>
                </h1>
                <p className="capitalize text-2xl font-light text-gray-500 mt-5 md:text-3xl">{title}</p>
                <p className="mt-10 leading-8 max-w-xs text-gray-800 text-lg dark:text-gray-300 md:max-w-sm md:text-xl lg:max-w-2xl">
                    {text} 
                </p>
                <div className="flex items-center mt-8 gap-2">

                    <Link href={'/projects'}>
                        <button className="btn btn-secondary rounded-lg shadow-lg shadow-secondary/50  uppercase dark:animate-gradient-glow dark:shadow-none dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-purple-200 lg:w-80">See my projects</button>
                    </Link>
                    <Link href={'/contact'}>
                        <button className="btn btn-ghost rounded-lg uppercase lg:w-48">Contact</button>
                    </Link>
                </div>
        </m.div>
    )
}

export default Hero