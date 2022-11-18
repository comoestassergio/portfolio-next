import React from "react";
import Link from "next/link";
import Head from "next/head";
import {motion as m} from 'framer-motion'
import {BsTelegram} from 'react-icons/bs'
import { BsGithub } from "react-icons/bs";
import {BiFileBlank} from 'react-icons/bi'

export default function Contact(){

    const links = {
        telegram:'https://t.me/comoestassergio',
        github: 'https://github.com/comoestassergio'
    }

    return (
        <>
            <Head>
                <title>contact | comoestassergio</title>
            </Head>

            <m.div 
                initial={{opacity: 0, y: '100%'}} 
                animate={{opacity: 1, y: '0%'}} 
                transition={{ease: "easeOut"}} 
                exit={{y: '100%'}} 
                className="absolute h-full w-full flex items-center justify-center gap-5 p-5 overflow-hidden sm:ml-8 md:max-w-lg md:mx-auto md:items-center"
            >
                <h1 className="text-6xl text-left font-bold text-gray-800 uppercase dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-purple-400 dark:text-transparent">Hit<br/>me<br/>up</h1>
                <ul className="grid grid-cols-2 gap-3">
                    <Link href={links.telegram} target='_blank'>
                        <li className="btn btn-outline h-20 rounded-lg flex flex-col gap-1 items-center text-lg capitalize dark:hover:bg-gradient-to-r dark:hover:from-fuchsia-400 dark:hover:to-purple-400 dark:hover:border-purple-400">
                            <BsTelegram className="text-2xl" /> Telegram
                        </li>
                    </Link>
                    <Link href={links.github} target='_blank'>
                        <li className="btn btn-outline h-20 rounded-lg flex flex-col gap-1 items-center text-lg capitalize dark:hover:bg-gradient-to-r dark:hover:from-fuchsia-400 dark:hover:to-purple-400 dark:hover:border-purple-400">
                            <BsGithub className="text-2xl" /> GitHub
                        </li>
                    </Link>
                    <Link className=" col-span-2" href={'/contact/resume'}>
                        <li className="btn btn-secondary btn-outline h-20 rounded-lg flex flex-col gap-1 items-center text-lg capitalize">
                            <BiFileBlank className="text-2xl" /> resume
                        </li>
                    </Link>
                </ul>
            </m.div>
        </>
    )
}