import { useState, useEffect } from "react"
import { Menu, Close } from "@mui/icons-material"
import FFI from './../assets/logo.png'

export default function Navbar() {
    const [sidebarActive, setSidebarActive] = useState(false)
    const handleSidebarToggle = () => {
        setSidebarActive(!sidebarActive)
    }
    useEffect(() => {
        if (sidebarActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [sidebarActive])

    return (
        <div className="rounded-lg" id="navbar">
            <div className="m-5 mb-2 mx-7 flex rounded-lg" style={{ color: "#374063" }}>
                <a href="/#landing" className=""><img style={{ height: "70px" }} src={FFI} alt="FFI"></img></a>
                <button onClick={handleSidebarToggle} className="ml-auto md:hidden">
                    {sidebarActive ? <Close /> : <Menu />}
                </button>
                <div className="ml-auto hidden md:block">
                    <a href="/#about-us" className="ml-auto">About us</a>
                    <a href="/#initiatives" className="ml-5">Initiatives</a>
                    <a href="/#members" className="ml-5">Members</a>
                    <a href="/#contact-us" className="ml-5">Contact us</a>
                </div>
            </div>
            {sidebarActive &&
                <div className="flex justify-center w-full smooth-shadow rounded-lg">
                    <div className="z-100 p-8 mx-6 rounded md:hidden text-white w-full my-5 rounded-lg" style={{ background: "#7F94E8" }}>
                        <div className="flex flex-col w-full">
                            <a href="#about-us" className="m-2"><button onClick={handleSidebarToggle}>About us</button></a>
                            <a href="#initiatives" className="m-2"><button onClick={handleSidebarToggle}>Initiatives</button></a>
                            <a href="#members" className="m-2"><button onClick={handleSidebarToggle}>Members</button></a>
                            <a href="#contact-us" className="m-2"><button onClick={handleSidebarToggle}>Contact us</button></a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}