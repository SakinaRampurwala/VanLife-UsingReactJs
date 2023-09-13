import React from "react";
import imgAbt from '../aboutBg.png' 
import {Link} from 'react-router-dom'
import Footer from "./Footer";

export default function About(){
    return(
        <div className="grid place-items-center bg-[#FFF7ED]">
            <img src={imgAbt} alt="test" className="w-full"/>
            <div className="grid gap-8 max-w-screen-lg p-8 ">
                <h2 className="text-3xl">Don’t squeeze in a sedan when you could relax in a van.</h2>

                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>

                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="bg-[#FFCC8D] p-6 grid gap-5 grid-cols-6">
                    <h2 className="text-2xl col-start-1 col-end-7">Your destination is waiting.Your van is ready.</h2>
                    <Link className="rounded bg-[#000000] text-white p-2 col-start-1 col-end-3 text-center" to='/vans'>Explore Our Vans</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}