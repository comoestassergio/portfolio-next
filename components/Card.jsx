import React from "react";
import Link from "next/link";
import Image from "next/image";
import uniqid from 'uniqid'

export default function Card ({el, id, name, homepage, topics, description, code }) {

    const cleanName = name.split('-').join(' ')

    const imgPath = `/../public/static/${name.toLowerCase()}.png`

    return (
        <li key={id} className="card w-96 shadow-xl md:card-side md:w-auto dark:rounded-lg">
            <div className="relative w-auto h-80 md:h-80 md:w-80">
                <Image className="object-cover" src={imgPath} fill={true} alt={name}/>
            </div>
            <div className="card-body gap-4 dark:bg-stone-900 md:w-96">
                <Link href={`/project/${name.toLowerCase()}`} className='max-w-fit'>
                    <h2 className="card-title capitalize hover:underline dark:bg-clip-text dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-purple-400 dark:text-transparent">{cleanName}</h2>
                </Link>
                <p className="dark:text-stone-400">{description}</p>
                {topics &&
                    <ul className="flex gap-2 mb-3">
                        {topics.map(el => (
                            <li key={uniqid()} className="px-4 py-2 bg-base-300 rounded-lg dark:rounded-xl dark:text-stone-300 dark:bg-stone-800">{el}</li>
                        ))
                        }
                    </ul>
                }
                <div className="card-actions justify-end">
                <Link href={`${homepage}`} target='_blank'>
                    <button className="btn btn-primary dark:rounded-xl dark:uppercase dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-purple-400">Open</button>
                </Link>
                <Link href={`${code}`} target='_blank'>
                    <button className="btn btn-outline dark:rounded-xl dark:btn-ghost dark:uppercase">View Code</button>
                </Link>
                </div>
            </div>
        </li>
    )
}
