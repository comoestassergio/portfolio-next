import React from "react";
import Link from "next/link";
import Head from "next/head";
import {motion as m} from 'framer-motion'
import {FaRobot} from 'react-icons/fa'

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 | comoestassergio</title>
            </Head>
            <m.div 
            initial={{opacity: 0, y: '100%'}} 
            animate={{opacity: 1, y: '0%'}} 
            transition={{ease: "easeOut"}} 
            exit={{y: '100%'}} 
            className="min-h-screen flex flex-col items-center justify-center gap-8">
                <FaRobot className="text-7xl" />
                <h1 className="text-3xl font-semibold uppercase">Oops, no such page...</h1>
                <p className="text-xl max-w-sm text-center">You've run into <span className="btn-link"><Link href={'https://ru.wikipedia.org/wiki/%D0%9E%D1%88%D0%B8%D0%B1%D0%BA%D0%B0_404'}>Error 404</Link></span>, you can safely go back now</p>
                <Link href={'/'}>
                    <button className="btn btn-outline">Return home</button>
                </Link>
            </m.div>
        </>
    )
}

export default Custom404