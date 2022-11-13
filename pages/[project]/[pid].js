import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { marked } from "marked";
import {motion as m} from 'framer-motion'

export default function project({ markdown }){
    const router = useRouter()
    const {pid} = router.query

    const handleBack = () => {
        router.back()
    }
    
    return(
        <>
            <Head>
                <title>{pid} | comoestassergio</title>
            </Head>
            <m.div
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{ease: "easeOut"}} 
                exit={{opacity: 0}} 
                className="min-h-screen flex flex-col items-center justify-center gap-5 mx-auto">
                <div dangerouslySetInnerHTML={{__html: marked(markdown)}} className='flex flex-col max-w-sm bg-gray-100 p-6 rounded-lg text-xl gap-4 dark:bg-stone-900 dark:text-stone-300 md:max-w-md'>
                </div>
                <button onClick={handleBack} className="btn btn-ghost dark:uppercase dark:rounded-lg">go back</button>
            </m.div>
        </>
    )
}

export async function getServerSideProps(context){
    const query = context.query.pid
    const project = await axios.get(`https://raw.githubusercontent.com/comoestassergio/${query}/main/README.md`)
    const markdown = project.data

    return {
        props: { markdown }
    }
}