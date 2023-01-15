import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Footer from "../components/Footer";
import siteMetadata from "../data/siteMetadata";
import ProjectList from "../components/ProjectList";

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
                <title>projects | {siteMetadata.name}</title>
            </Head>
            
            <div 
                className="relative w-full flex flex-col items-center justify-center pt-[10vw] lg:items-start lg:pt-[5vw] "
            >
                <ProjectList projects={filteredData} />
                <Footer />
            </div>
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
    }).sort((a, b) => b.id - a.id)


    return {
        props: {
            filteredData
        }
    }
}