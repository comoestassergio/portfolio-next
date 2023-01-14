import Link from "next/link"
import siteMetadata from "../data/siteMetadata"


export default function Footer () {

    const date = new Date ()
    const currentYear = date.getFullYear()

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link href={'/'} className="link link-hover">Home</Link> 
                <Link href={'/contact'} className="link link-hover">Contact</Link> 
                <Link href={siteMetadata.resumeLink} target='_blank' className="link link-hover">Resume</Link> 
            </div> 
            <div>
                <p>Copyright © {currentYear} - All right reserved by <Link href={siteMetadata.github} target='_blank' className=" underline">{siteMetadata.name}</Link></p>
            </div>
        </footer>
    )
}