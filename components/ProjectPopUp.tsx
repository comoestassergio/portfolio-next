import Image from "next/image";
import { useRouter } from "next/router";
import { Project, ReadMe } from "../pages/projects";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import axios from "axios";


type ProjectPopUpProps = {
    projects: Project []
    readMes: ReadMe []
} 

export default function ProjectPopUp ({ projects, readMes }: ProjectPopUpProps) {

    const [markdown, setMarkdown] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)

    const router = useRouter()
    const { project } = router.query

    const currentProject = projects.find(el => el.id.toString() === project)

    const currentReadme = readMes.find(el => el.id.toString() === project)?.markdown

    return (
        <>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
                <label htmlFor="project-modal" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <div className="relative w-auto h-96 mb-5 md:h-80 md:w-80 lg:h-auto lg:w-3/4">
                            <Image className="object-cover rounded-xl" fill={true} src={`/images/${currentProject?.id}.png`} alt={currentProject?.name}/>
                        </div>
                        {/* <h3 className="text-3xl font-bold first-letter:uppercase">{currentProject?.name}</h3>
                        <p className="py-4 text-lg mb-3">{currentProject?.description}</p> */}
                        {/* {currentProject?.topics &&
                            <ul className="flex flex-wrap min-w-xs gap-2 mb-3">
                                {currentProject?.topics?.map((el, index) => (
                                    <li key={index} className="px-4 py-2 bg-base-300 rounded-lg dark:rounded-lg dark:text-stone-300 dark:bg-stone-800">{el}</li>
                                ))
                                }
                            </ul>
                        } */}
                        {currentReadme && 
                            <ReactMarkdown 
                                children={currentReadme} 
                                components={{
                                    h1: ({node, ...props}) => <h1 className="text-2xl font-semibold" {...props} />,
                                    h2: ({node, ...props}) => <h2 className="text-xl font-semibold" {...props} />,
                                    h3: ({node, ...props}) => <h2 className="text-lg font-semibold" {...props} />,
                                    ul: ({node, ...props}) => <ul className=" opacity-70 list-disc ml-6 text-lg break-words flex flex-col gap-3" {...props} />,
                                    p: ({node, ...props}) => <p className="text-lg opacity-75 leading-[200%]" {...props} />
                                }}
                            />
                        }
                    </label>
            </label>
        </>
    )
}