import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <>
            <header className=" absolute top-0 flex justify-between items-center p-4 md:px-10 lg:px-20 z-10">
                <h1 className="font-bold text-xl">
                    <Link href="/">comoestassergio</Link>
                </h1>
            </header>
            <main>{children}</main>
        </>
    )
}
export default Layout