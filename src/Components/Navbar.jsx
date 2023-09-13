import React from "react";
import Home from './Home';
import About from './About';
import Vans from './Vans';

import { BrowserRouter , Routes , Route, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <BrowserRouter>

                <nav class="sticky top-0 flex items-center justify-between flex-wrap bg-[#FFF0DD] p-6">
                <div class="flex items-center flex-shrink-0 text-black mr-6">
                    <Link to='/'  className="block mt-4 md:inline-block md:mt-0 text-base	mr-4"><span class="font-semibold text-xl tracking-tight">#VANLIFE</span></Link>
                </div>
                <div class="block  md:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block  md:flex md:items-center justify-end md:w-auto">
                    <div class="text-sm md:flex-grow">
                        <Link to='/'  className="block mt-4 md:inline-block md:mt-0 text-base	mr-4">Home</Link>
                        <Link to='/about'  className="block mt-4 md:inline-block md:mt-0 text-base	mr-4">About</Link>
                        <Link to='/vans'  className="block mt-4 md:inline-block md:mt-0 text-base mr-4">Vans</Link>
                    </div>
                    <div>
                </div>
                </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/vans" element={<Vans/>}></Route>

                </Routes>
            </BrowserRouter>



        </div>
       
        
    )
}
