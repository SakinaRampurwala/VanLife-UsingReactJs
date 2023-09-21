import React from "react";
import {NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-[#FFF0DD] p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                        <NavLink to='/'  className='block mt-4 md:inline-block md:mt-0 text-base mr-4'><span className="font-semibold text-xl tracking-tight">#VANLIFE</span></NavLink>
                    </div>
                    <div className='md:block inline-block md:text-sm  text-[0.9rem] flex md:items-center justify-end md:w-auto'>
                            <NavLink to='host'  className={({ isActive }) => 
                                                         'block mt-4 md:inline-block md:mt-0 text-base mr-4'+ (isActive ? " underline font-semibold " : " no-underline font-normal")}>Host</NavLink>
                            <NavLink to='about'  className={({ isActive }) => 
                                                         'block mt-4 md:inline-block md:mt-0 text-base mr-4'+ (isActive ? " underline font-semibold " : " no-underline font-normal")}>About</NavLink>
                            <NavLink to='vans'  className={({ isActive }) => 
                                                         'block mt-4 md:inline-block md:mt-0 text-base mr-4'+ (isActive ? " underline font-semibold " : " no-underline font-normal")}>Vans</NavLink>                
                    <div>
                </div>
                </div>
            </nav>
        </div>
       
        
    )
}
