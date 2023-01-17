import Image from "next/image";
import { useRouter } from "next/router";
import { Project, ReadMe } from "../pages/projects";
import ReactMarkdown from "react-markdown";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";


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
                <label  htmlFor="project-modal" className="modal cursor-pointer">
                    <label className="modal-box relative overflow-y-auto md:max-w-3xl lg:flex lg:items-center lg:gap-3 lg:max-w-5xl" htmlFor="">
                        {project &&
                            <div className="relative w-auto h-80 mb-5 md:h-96 lg:w-[50vw] lg:h-[50vh] lg:max-h-sm">
                                <Image className="object-cover rounded-xl" fill={true} src={`/images/${currentProject?.id}.png`} alt={currentProject?.name}/>
                            </div>
                        }
                        {currentReadme && 
                            <div className="flex flex-col max-w-full lg:max-w-md">
                                <ReactMarkdown 
                                    children={currentReadme} 
                                    components={{
                                        h1: ({node, ...props}) => <h1 className="text-2xl font-semibold mb-3" {...props} />,
                                        h2: ({node, ...props}) => <h2 className="text-xl font-semibold mb-2" {...props} />,
                                        h3: ({node, ...props}) => <h2 className="text-lg font-semibold mb-1" {...props} />,
                                        ul: ({node, ...props}) => <ul className=" opacity-70 list-disc ml-6 text-lg break-words flex flex-col gap-3" {...props} />,
                                        p: ({node, ...props}) => <p className="text-lg opacity-75 leading-[200%] my-3" {...props} />
                                    }}
                                />
                                <div className="flex justify-end gap-3 mt-5 lg:mt-10">
                                    <Link href={`${currentProject.homepage}`} target='_blank' className="btn btn-secondary rounded-lg shadow-lg shadow-secondary/50 dark:rounded-lg dark:uppercase dark:animate-gradient-glow dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-purple-200">
                                        Live Preview
                                    </Link>
                                    <Link href={`${currentProject.html_url}`} target='_blank' className="btn btn-outline dark:rounded-lg dark:btn-ghost dark:uppercase">
                                        View Code
                                    </Link>
                                </div>
                            </div>
                            
                        }
                        
                    </label>
            </label>
        </>
    )
}