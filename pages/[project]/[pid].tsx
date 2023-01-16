import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import {motion as m} from 'framer-motion'
import ReactMarkdown from "react-markdown";


export default function project(){

    const [content, setContent] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    const fetchProject = async () => {
        const {pid} = router.query

        try {
            const project = await axios.get(`https://raw.githubusercontent.com/comoestassergio/${pid}/main/README.md`)
            const markdown = project?.data

            if (markdown) {
                return setContent(markdown)
            } else {
                return setContent(null)
            }
            
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {

        if (router.isReady) {
            fetchProject()
        }

    }, [])
    
    return(
        <>
            <Head>
                <title>comoestassergio</title>
            </Head>
            <m.div
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{ease: "easeOut"}} 
                exit={{opacity: 0}} 
                className="min-h-screen flex flex-col items-center justify-center gap-5 mx-auto mt-10">
                <div className='relative flex flex-col max-w-sm bg-gray-100 p-8 rounded-lg text-xl gap-4 dark:bg-stone-900 dark:text-stone-300 md:max-w-md'>
                    {content && 
                        <ReactMarkdown 
                            children={content} 
                            components={{
                                h1: ({node, ...props}) => <h1 className="text-2xl font-semibold" {...props} />,
                                h2: ({node, ...props}) => <h2 className="text-xl font-semibold" {...props} />,
                                h3: ({node, ...props}) => <h2 className="text-lg font-semibold" {...props} />,
                                ul: ({node, ...props}) => <ul className=" opacity-70 list-disc ml-6 text-lg break-words flex flex-col gap-3" {...props} />,
                                p: ({node, ...props}) => <p className="text-lg opacity-75 leading-[200%]" {...props} />
                            }}
                        />
                    }
                    {!content && !error &&
                        <Placeholder />
                    }
                    {error &&
                       <Error />
                    }
                    <button onClick={handleBack} className="btn btn-outline btn-circle text-xl self-center mt-5">&times;</button>
                </div>
            </m.div>
        </>
    )
}

function Placeholder () {
    return (
        <>
            <div className="max-w-[200px] opacity-50 flex-grow">
                <div className=" h-6 bg-black rounded-lg animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-3 mt-6 opacity-50 flex-grow">
                <div className=" max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[400px] h-4 bg-black animate-pulse rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-2 mt-8 opacity-50 min-w-[400px]">
                <div className="max-w-[150px] h-3 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[150px] h-3 bg-black animate-pulse rounded-lg"></div>
                <div className="max-w-[150px] h-3 bg-black animate-pulse rounded-lg"></div>
            </div>
        </>
    )
}

function Error () {
    return (
        <>
            <h1 className="text-3xl font-medium mb-4">Oops</h1>
            <p className="text-lg opacity-75">An error occured while fetching project data, try again in a minute.</p>
        </>
    )
}