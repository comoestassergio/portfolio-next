import Card from "../components/Card";


export default function ProjectList ({ projects }) {

    return (
        <ul 
            className="bg-base-100 flex flex-wrap flex-row justify-center items-start gap-5 py-5 px-5 md:flex-wrap md:max-w-2xl md:gap-7 lg:flex-col lg:pl-32 lg:gap-[5vw] lg:w-full lg:max-w-none lg:items-start">
            {projects.map(el => (
                <Card key={el.id} id={el.id} name={el.name} topics={el.topics} homepage={el.homepage} description={el.description} code={el.html_url}/>
            ))}
        </ul>
    )
}