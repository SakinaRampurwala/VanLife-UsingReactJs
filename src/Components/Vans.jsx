import React from "react";
import Server from '../server'
import Footer from "./Footer";
import { Link } from 'react-router-dom';

export default function Vans(){

    // let [apiData, setApiData]=React.useState([])
    // fetch('api/vans')
    // .then(response=> response.json())
    // .then(data=> setApiData(data));

    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{

       fetch("api/vans")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setVans(data.vans)
      })
  
    } ,[])

    console.log(vans);

    const vanElements=vans.map(function(van){

       return <div className="">
                <img src={van.imageUrl} />
                <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-stretch">
                    <h3 className="col-span-2 font-semibold md:text-2xl sm:text-base">{van.name}</h3>
                    <h3 className=" font-semibold md:justify-self-end">${van.price} <p className="font-light text-xs">/day</p></h3>
                </div>
                <span className={"rounded text-white p-1 px-4 text-sm " + (van.type=='luxury'? ' bg-[#161616]' : ' ') + (van.type=='simple' ?  'bg-[#E17654]' : ' ') + (van.type=='rugged' ?' bg-[#115E59]' : ' ')}> {van.type}</span>
            </div>
    })
    console.log(vanElements);

    return(
        <div className="grid">
            <div className="grid p-10">
                <h1 className="font-semibold text-2xl ">Explore Our van options.</h1>
                <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3 gap-2">
                    <Link to='/' className="bg-[#FFEAD0] w-max	py-1 px-6 rounded">Simple</Link>
                    <Link to='/' className="bg-[#FFEAD0] w-max	py-1 px-6 rounded	">Luxury</Link>
                    <Link to='/' className="bg-[#FFEAD0] w-max	py-1 px-6 rounded	">Rugged</Link>

                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                    {vanElements}
                </div>
            </div>
            <Footer/>
        </div>
    )
}