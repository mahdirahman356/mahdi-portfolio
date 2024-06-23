import { NavLink, Outlet } from "react-router-dom";
import profile from "../assets/image/mahdi.jpg"

import "../style.css"

const Main = () => {
    return (
        <div className="">
            <div className="md:h-screen">
                <div className="w-full flex flex-col md:flex-row-reverse">
                    <div className="min-h-screen md:w-1/2 h-full">
                        <div className="md:fixed z-20 md:w-1/2">
                            {/* navbar */}

                            <div className="navbar fixed md:w-1/2 text-white">
                                <div className="navbar-start">
                                    <div className="flex items-center gap-5">
                                        <div role="button" className="drawer lg:hidden">
                                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                            <div className="drawer-content">
                                                <label htmlFor="my-drawer"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4D869C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                                </label>
                                            </div>
                                            <div className="drawer-side">
                                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content space-y-4">
                                                    <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/">About</NavLink>
                                                    <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/projects">Projects</NavLink>
                                                    <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/skills">Skills</NavLink>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1 gap-8 font-semibold">
                                        <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/">About</NavLink>
                                        <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/projects">Projects</NavLink>
                                        <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/skills">Skills</NavLink>
                                        <NavLink className={({ isActive }) => isActive && "text-[#74bdda]"} to="/education">Education</NavLink>
                                    </ul>
                                </div>
                                <div className="navbar-end">
                                </div>
                            </div>
                            {/* image */}
                            <div className="md:h-screen">
                                <div className="hero h-screen bg-cover bg-center" style={{ backgroundImage: `url(${profile})` }}>
                                    <div className="hero-overlay bg-opacity-40"></div>
                                    <div className="hero-content text-center text-neutral-content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2  flex-1 bg-gray-100">
                        <a className="btn btn-ghost text-xl m-3 font-bold"><span className="text-[#4D869C]">Mahdi's</span> portfolio</a>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;