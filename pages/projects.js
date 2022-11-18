import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import {motion as m} from 'framer-motion'
import Card from "../components/Card";

export default function ProjectsPage({ data }){

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setShowContent(!showContent)
    }, [])
    
    const filteredData = data.filter(el => {
        return el.topics.length > 0 && el.homepage !== '' && el.name !== 'comoestassergio'
    })

    if (!showContent) {
        return <></>
    }

    return (
        <>
            <Head>
                <title>projects | comoestassergio</title>
            </Head>
            
            <m.div 
            initial={{opacity: 0, y: '-100%'}} 
            animate={{opacity: 1, y: '0%'}} 
            transition={{ease: "easeOut"}} 
            exit={{y: '100%', opacity: 0}} 
            className="absolute w-full flex items-center justify-center pt-14"
            >
                <ul className="bg-base-100 flex flex-wrap-reverse flex-row-reverse justify-center items-start gap-5 py-5 md:flex-wrap-reverse md:max-w-2xl md:gap-7 lg:gap-10 lg:max-w-4xl">
                    {filteredData.map(el => (
                        <Card key={el.id} name={el.name} topics={el.topics} homepage={el.homepage} description={el.description} code={el.html_url}/>
                    ))}
                </ul>
            </m.div>
        </>
    )
}

export async function getStaticProps(){
    const repos = await axios.get('https://api.github.com/users/comoestassergio/repos')
    const data = repos.data

    return {
        props: {
            data
        }
    }
}