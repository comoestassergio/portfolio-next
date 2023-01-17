import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion as m} from 'framer-motion'
import { Project } from "../pages/projects";
import { useRouter } from "next/router";

type CardProps = {
} & Project

export default function Card ({ id, name, homepage, topics, description, html_url }: CardProps) {

    const router = useRouter()

    const cleanName = name.split('-').join(' ')

    const imgPath = `/images/${id}.png`

    const handleClick = () => {
        router.push(`/projects/?project=${id}`, undefined, {shallow: true})
    }

    return (
        <m.li 
            initial={{scale: 0, opacity: 0}} 
            animate={{scale: 1, opacity: 1}} 
            transition={{ease: "easeOut"}} 
            exit={{ scale: 0, opacity: 0 }}  
            key={id} 
            className={`card w-full max-w-full shadow-xl border-[0.5px] border-gray-200/50 md:card-side dark:border-none dark:rounded-lg lg:max-w-5xl relative`}>
            <div className="relative w-auto h-80 md:min-h-80 md:h-auto md:w-80 lg:h-auto lg:w-3/4">
                <Image className="object-cover" fill={true} src={imgPath} alt={name}/>
            </div>
            <div className="card-body gap-4 dark:bg-stone-900 md:w-[50%] md:h-[35vh] lg:h-[50vh]">
                <h2  className="card-title font-bold capitalize dark:bg-clip-text dark:animate-gradient-glow dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-transparent">{cleanName}</h2>
                <p className="dark:text-stone-400">{description}</p>
                {topics &&
                    <ul className="flex flex-wrap min-w-xs gap-2 mb-3">
                        {topics.map((el, index) => (
                            <li key={index} className="px-4 py-2 bg-base-300 text-sm rounded-lg lg:text-md dark:rounded-lg dark:text-stone-300 dark:bg-stone-800">{el}</li>
                        ))
                        }
                    </ul>
                }
                <div className="card-actions justify-end">
                    <label tabIndex={0} onClick={handleClick} htmlFor="project-modal" className="btn btn-secondary rounded-lg shadow-lg shadow-secondary/50 dark:rounded-lg dark:uppercase dark:animate-gradient-glow dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-purple-200">Open Info</label>
                </div>
            </div>
        </m.li>
    )
}
