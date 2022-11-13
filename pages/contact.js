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
                className="absolute h-full w-full flex flex-col justify-center p-5 overflow-hidden sm:ml-8 md:max-w-lg md:mx-auto md:items-center"
            >
                <h1 className="text-5xl mb-5 text-center font-bold text-gray-800 dark:text-gray-300">Hit me up</h1>
                <ul className="grid grid-cols-2 py-5 gap-3">
                    <Link href={links.telegram} target='_blank'>
                        <li className="btn btn-outline h-20 rounded-lg flex flex-col gap-1 items-center text-lg capitalize">
                            <BsTelegram className="text-2xl" /> Telegram
                        </li>
                    </Link>
                    <Link href={links.github} target='_blank'>
                        <li className="btn btn-outline h-20 rounded-lg flex flex-col gap-1 items-center text-lg capitalize">
                            <BsGithub className="text-2xl" /> GitHub
                        </li>
                    </Link>
                    <Link href={'/contact/resume'}>
                        <li className="btn h-20 rounded-lg flex flex-col gap-1 items-center text-lg capitalize">
                            <BiFileBlank className="text-2xl" /> resume
                        </li>
                    </Link>
                </ul>
            </m.div>
        </>
    )
}