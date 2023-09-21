import React from "react";
import { Link, useParams } from "react-router-dom";
export default function VanDetail(){
    const params=useParams();
    console.log(params.id);
    let [vanDetail , setVanDetail] = React.useState({});
    React.useEffect(()=>{

        fetch(`/api/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVanDetail(data.vans))
        .catch(error => console.error(error));
     } ,[params.id])

     



    return(
        <div>
            {vanDetail ?
                <div className=" lg:max-w-screen-lg	 md:max-w-screen-md sm:max-w-screen-sm	 m-auto p-6">
                    <Link to='..' relative="path"><p className=" cursor-pointer place-self-start text-left m-4"> &#8592; <span className='underline'>Back to all vans</span></p></Link>
                    <img src={vanDetail.imageUrl} alt='bgImage' className="cursor-pointer rounded w-full"/>
                    <div className="grid gap-4 mt-2">
                        <span className={"rounded w-max	 text-white p-1 px-4 text-sm " + (vanDetail.type==='luxury'? ' bg-[#161616]' : ' ') + (vanDetail.type==='simple' ?  'bg-[#E17654]' : ' ') + (vanDetail.type==='rugged' ?' bg-[#115E59]' : ' ')}> {vanDetail.type}</span>
                        <h2 className="font-semibold md:text-2xl sm:text-base">{vanDetail.name}</h2>
                        <p className=" font-semibold">{vanDetail.price}/day</p>
                        <p className="text-justify">{vanDetail.description}</p>
                        <button className="rounded bg-[#FF8C38] p-2 ">Report this van</button>
                </div>
                </div> 
                
                :<h2>Loading</h2>
            }
        </div>
    )
}