import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import {motion as m} from 'framer-motion'
import ReactMarkdown from "react-markdown";

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
                className="min-h-screen flex flex-col items-center justify-center gap-5 mx-auto mt-10">
                <div className='relative flex flex-col max-w-sm bg-gray-100 p-8 rounded-lg text-xl gap-4 dark:bg-stone-900 dark:text-stone-300 md:max-w-md'>
                    <ReactMarkdown 
                        children={markdown} 
                        components={{
                            h1: ({node, ...props}) => <h1 className="text-2xl font-semibold" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-xl font-semibold" {...props} />,
                            h3: ({node, ...props}) => <h2 className="text-lg font-semibold" {...props} />,
                            ul: ({node, ...props}) => <ul ordered='false' className=" opacity-70 list-disc ml-6 text-lg break-words flex flex-col gap-3" {...props} />,
                            p: ({node, ...props}) => <p className="text-lg opacity-75 leading-[200%]" {...props} />
                        }}
                    />
                    <button onClick={handleBack} className="btn btn-outline btn-circle text-xl self-center mt-5">&times;</button>
                </div>
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