import React from "react";
import Link from "next/link";
import Image from "next/image";
import uniqid from 'uniqid'
import {motion as m} from 'framer-motion'

export default function Card ({el, id, name, homepage, topics, description, code }) {

    const cleanName = name.split('-').join(' ')

    const imgPath = `/images/${id}.png`

    return (
        <m.li 
            initial={{scale: 0, opacity: 0}} 
            animate={{scale: 1, opacity: 1}} 
            transition={{ease: "easeOut"}} 
            exit={{ scale: 0, opacity: 0 }}  
            key={id} 
            className={`card w-full max-w-full shadow-xl border-[0.5px] border-gray-200/50 md:card-side md:max-w-2xl dark:border-none dark:rounded-lg lg:max-w-5xl relative`}>
            <div className="relative w-auto h-80 md:h-80 md:w-80 lg:h-auto lg:w-3/4">
                <Image className="object-cover" fill={true} src={imgPath} alt={name}/>
            </div>
            <div className="card-body gap-4 dark:bg-stone-900 md:w-[50%] lg:h-[50vh]">
                <Link href={`/project/${name.toLowerCase()}`} className='max-w-fit'>
                    <h2 className="card-title capitalize hover:underline dark:bg-clip-text dark:animate-gradient-glow dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-transparent">{cleanName}</h2>
                </Link>
                <p className="dark:text-stone-400">{description}</p>
                {topics &&
                    <ul className="flex flex-wrap min-w-xs gap-2 mb-3">
                        {topics.map(el => (
                            <li key={uniqid()} className="px-4 py-2 bg-base-300 rounded-lg dark:rounded-lg dark:text-stone-300 dark:bg-stone-800">{el}</li>
                        ))
                        }
                    </ul>
                }
                <div className="card-actions justify-end">
                    <Link href={`${homepage}`} target='_blank'>
                        <button className="btn btn-secondary rounded-lg shadow-lg shadow-secondary/50 dark:rounded-lg dark:uppercase dark:animate-gradient-glow dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-purple-200">Live Preview</button>
                    </Link>
                    <Link href={`${code}`} target='_blank'>
                        <button className="btn btn-outline dark:rounded-lg dark:btn-ghost dark:uppercase">View Code</button>
                    </Link>
                </div>
            </div>
        </m.li>
    )
}
