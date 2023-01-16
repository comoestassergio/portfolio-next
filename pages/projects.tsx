import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Footer from "../components/Footer";
import siteMetadata from "../data/siteMetadata";
import ProjectList from "../components/ProjectList";
import ProjectPopUp from "../components/ProjectPopUp";

export type Project = {
    id: number
    name: string
    topics: string[]
    homepage: string
    description: string
    html_url: string
}

type ProjectsPageProps = {
    filteredData: Project[],
    readMes: ReadMe[]
}

export type ReadMe = {
    id: number
    markdown: string
}

export default function ProjectsPage({ filteredData, readMes }: ProjectsPageProps){

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
            <ProjectPopUp projects={filteredData} readMes={readMes} />
        </>
    )
}

export async function getStaticProps(){
    const repos = await axios.get('https://api.github.com/users/comoestassergio/repos')
    const data = repos.data

    const filteredData = data.filter((el: Project) => {
        return el.topics.length > 0 && el.homepage !== '' && el.name !== 'comoestassergio'
    }).map((el: Project) => {
        return {name: el.name, id: el.id, topics: el.topics, homepage: el.homepage, description: el.description, html_url: el.html_url}
    }).sort((a: Project, b: Project) => b.id - a.id)

    let readMes = []

    for (let i = 0; i < filteredData.length; i ++ ) {
        const res = await axios.get(`https://raw.githubusercontent.com/comoestassergio/${filteredData[i].name}/main/README.md`)
        const readMe = res.data
        readMes.push({id: filteredData[i].id, markdown: readMe})
    }

    return {
        props: {
            filteredData,
            readMes
        }
    }
}