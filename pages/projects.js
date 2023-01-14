import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import {motion as m} from 'framer-motion'
import Card from "../components/Card";

export default function ProjectsPage({ filteredData }){

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setShowContent(!showContent)
    }, [])

    if (!showContent) {
        return <></>
    }

    return (
        <>
            <Head>
                <title>projects | comoestassergio</title>
            </Head>
            
            <m.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{ease: "easeOut"}} 
            exit={{ opacity: 0 }} 
            className="relative w-full flex flex-col items-center justify-center pt-[10vw] lg:items-start lg:pt-[5vw] "
            >
                <ul className="bg-base-100 flex flex-wrap-reverse flex-row-reverse justify-center items-start gap-5 py-5 px-5 md:flex-wrap-reverse md:max-w-2xl md:gap-7 lg:flex-col-reverse lg:pl-32 lg:gap-[5vw] lg:w-full lg:max-w-none lg:items-end">
                    {filteredData.map(el => (
                        <Card key={el.id} id={el.id} name={el.name} topics={el.topics} homepage={el.homepage} description={el.description} code={el.html_url}/>
                    ))}
                </ul>
            </m.div>
        </>
    )
}

export async function getStaticProps(){
    const repos = await axios.get('https://api.github.com/users/comoestassergio/repos')
    const data = repos.data

    const filteredData = data.filter(el => {
        return el.topics.length > 0 && el.homepage !== '' && el.name !== 'comoestassergio'
    }).map(el => {
        return {name: el.name, id: el.id, topics: el.topics, homepage: el.homepage, description: el.description, html_url: el.html_url}
    })


    return {
        props: {
            filteredData
        }
    }
}