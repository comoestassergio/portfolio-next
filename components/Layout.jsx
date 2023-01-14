import React from "react";
import Link from "next/link";
import siteMetadata from "../data/siteMetadata";

const Layout = ({ children }) => {
    return (
        <>
            <header className=" absolute top-0 flex justify-between items-center p-4 md:px-10 lg:px-20 z-10">
                <h1 className="font-bold text-xl">
                    <Link href="/" className="dark:text-gray-400">{siteMetadata.name}</Link>
                </h1>
            </header>
            <main>{children}</main>
        </>
    )
}
export default Layout