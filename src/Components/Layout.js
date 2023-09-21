import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="relative min-h-screen" >
            <Navbar />
            <main className="pb-8">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}