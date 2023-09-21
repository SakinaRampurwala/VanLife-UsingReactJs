import React from "react";
import { Link } from 'react-router-dom';

export default function Vans(){
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

  
    const vanElements=vans.map(function(van){
        return <Link to={`/vans/${van.id}`} key={van.id}>
            <div key={van.id}>
                <img src={van.imageUrl} alt='bgImage' className='rounded' />
                <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-stretch">
                    <h3 className="col-span-2 font-semibold md:text-2xl sm:text-base">{van.name}</h3>
                    <h3 className=" font-semibold md:justify-self-end">${van.price}/day</h3>
                </div>
                <span className={"rounded text-white p-1 px-4 text-sm " + (van.type==='luxury'? ' bg-[#161616]' : ' ') + (van.type==='simple' ?  'bg-[#E17654]' : ' ') + (van.type==='rugged' ?' bg-[#115E59]' : ' ')}> {van.type}</span>
            </div>
        </Link>
    })

    return(
        
        <div className="grid">
            <div className="grid p-10">
                    <h1 className="font-semibold text-2xl ">Explore Our van options.</h1>
                    <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-4 gap-2 mt-5 mb-8">
                        <Link to='/' className="bg-[#FFEAD0] w-max	md:py-1 md:px-6 md:text-base text-sm px-3 rounded">Simple</Link>
                        <Link to='/' className="bg-[#FFEAD0] w-max	md:py-1 md:px-6 text-sm md:text-base px-3 rounded">Luxury</Link>
                        <Link to='/' className="bg-[#FFEAD0] w-max	md:py-1 md:px-6 text-sm md:text-base px-3 rounded">Rugged</Link>
                        <Link to='/' className="text-sm md:text-base w-max	md:py-1 md:px-6 underline">Clear Filter</Link>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">{vanElements}</div>
                </div>
        </div>
    )
}