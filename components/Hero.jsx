import React from "react"
import Link from "next/link"
import { motion as m } from 'framer-motion'
import Image from "next/image"

const Hero = ({ firstName, lastName, title, text }) => {
    return (
        <m.div initial={{opacity: 0, scale: 0.8}} 
                animate={{opacity: 1, scale: 1}} 
                exit={{opacity: 0, scale: 0}}
                className="absolute h-full w-full flex flex-col justify-center pl-4 md:max-w-lg md:ml-32 lg:ml-80"
            >
                <h1 className="text-5xl max-w-sm md:max-w-lg">
                    <span className="text-gray-600 overflow-hidden dark:text-gray-400">{firstName}</span> <span className="font-bold">{lastName}</span>
                </h1>
                <p className="capitalize text-2xl font-light text-gray-500 mt-5">{title}</p>
                <p className="mt-10 leading-8 max-w-xs text-gray-800 text-lg dark:text-gray-300 md:max-w-sm">
                    {text} 
                </p>
                <div className="flex items-center mt-8 gap-2">

                    <Link href={'/projects'}>
                        <button className="btn btn-secondary rounded-lg shadow-lg shadow-secondary/50 uppercase dark:shadow-none">See my projects</button>
                    </Link>
                    <Link href={'/contact'}>
                        <button className="btn btn-ghost rounded-lg uppercase">Contact</button>
                    </Link>
                </div>
        </m.div>
    )
}

export default Hero