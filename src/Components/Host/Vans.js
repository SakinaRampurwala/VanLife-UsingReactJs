import React from "react";
import { Link } from "react-router-dom";

export default function Vans(){

    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{

      fetch(`/api/host/vans/`)
      .then(response => response.json())
      .then(data => setVans(data.vans))
   } ,[])

   console.log(vans);
   const vanListed= vans.map(function(element){
       
    return <Link to={`/host/vans/${element.id}`}>
             <div className="grid  bg-white rounded m-auto p-8">
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                    <div><img src={element.imageUrl} alt="vanImage"/> </div>
                    <div className="flex flex-col items-left justify-center">
                        <span className={"rounded max-w-max  text-white p-1 px-4 text-sm " + (element.type==='luxury'? ' bg-[#161616]' : ' ') + (element.type==='simple' ?  'bg-[#E17654]' : ' ') + (element.type==='rugged' ?' bg-[#115E59]' : ' ')}> {element.type}</span>
                        <h1 className="md:text-2xl text-base">{element.name}</h1>
                        <p className="md:text-2xl text-base">{element.price}<span className="text-sm	">/ day</span></p>
                    </div>
                </div>
            </div>

            </Link>
   })
    return(
       <div className=" grid gap-3 p-6 m-auto	lg:max-w-screen-lg	max-w-screen-md mb-4">
          <h1 className="text-xl	">Your Listed Vans</h1>
          {vanListed}
       </div>
    )
}