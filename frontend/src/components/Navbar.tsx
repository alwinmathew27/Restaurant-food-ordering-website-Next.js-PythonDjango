"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Navbar = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    return (
        <div className="h-20 px-4 md:px-8 lg:px-4 2xl:px-4 relative">
            <div className="flex items-center justify-between md:hidden h-full ">
                {/*mobile*/}
                <Link href="/">
                    <div className="text-2xl tracking-wide">FOODIE</div>
                </Link>
                {/* Theme toggle for mobile */}
            </div>
            {/* bigger screener */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* Left */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    {/* <Link href="/" className="flex items-center gap-3 ">
                        <Image src="/Logo_img/s-logo.jpg" alt="logo" width={50} height={50} />
                         <div className="text-2xl font-medium tracking-wide">CookedUp</div>
                    </Link> */}
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">Homepage</Link>
                        <Link href="/">Shops</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                {/* Right */}
                <div className="w-2/3 flex items-center justify-between gap-8 relative">
                    {/* <SearchBar />
                    <NavIcons/> */}
                    {/* Theme toggle for desktop */}
                    <div className="ml-auto">
                    </div>
                </div>
                <div>
                    <button className="login"
                        onClick={() => {
                            btnNameReact === "Login" 
                            ? setBtnNameReact("Logout")
                               : setBtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar