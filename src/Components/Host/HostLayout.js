import React from "react";
import { NavLink , Outlet } from "react-router-dom";

export default function HostLayout(){
    return(
        <div className="bg-[#FFF7ED]">
            <div className="px-4 py-6 flex">
                {/* . means current route and .. go back to hirarchy hear current Route is /host  */}
            <NavLink end to='.' className={({ isActive }) => 
                                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline font-semibold	" : " no-underline font-normal")} >Dashboard</NavLink>
            <NavLink to='income' className={({ isActive }) => 
                                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline font-semibold	" : " no-underline font-normal")} >Income</NavLink>
            <NavLink to='vans' className={({ isActive }) => 
                                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline font-semibold	" : " no-underline font-normal ")}>Vans</NavLink>
            <NavLink to='reviews' className={({ isActive }) => 
                                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline ofont-semibold	" : " no-underline font-normal ")}>Reviews</NavLink>
            </div>
            {/* where to put the routes that match the actual path */}
            <Outlet/>                                        

        </div>
    )
}