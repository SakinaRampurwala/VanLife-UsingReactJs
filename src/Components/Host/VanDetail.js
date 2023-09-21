import React from "react";
import { useParams , NavLink , Link , Outlet} from "react-router-dom";

export default function VanDetail(){
    const params=useParams();
    console.log(params.id);
    let [vanDetail , setVanDetail] = React.useState({});


    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVanDetail(data.vans[0]))
     } ,[params.id])
     

    return(
        <div className=" grid gap-3 p-6 m-auto	lg:max-w-screen-lg	max-w-screen-md mb-4">
            {/* to='..' take us to the host path because it route to the parent path route in hirarchy */}
            {/* Then also if you want to use to='..' to go back relative to path not parent then use relarive='path' [GO BACK ONE LEVEL IN OUR PATH STRUCTURE NOT IN OUR ROUTING Hirarchy] (Take u go back to parent path not parent Route) */}
            <Link to='..' relative="path"><p className=" cursor-pointer place-self-start text-left m-4"> &#8592; <span className='underline'>Back to all vans</span></p></Link> 
            <div className="grid  bg-white rounded m-auto p-8 gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div><img src={vanDetail.imageUrl} alt="vanImage"/> </div>
                    <div className="flex flex-col items-left justify-center">
                        <span className={"rounded max-w-max  text-white p-1 px-4 text-sm " + (vanDetail.type==='luxury'? ' bg-[#161616]' : ' ') + (vanDetail.type==='simple' ?  'bg-[#E17654]' : ' ') + (vanDetail.type==='rugged' ?' bg-[#115E59]' : ' ')}> {vanDetail.type}</span>
                        <h1 className="md:text-2xl text-base">{vanDetail.name}</h1>
                        <p className="md:text-2xl text-base">{vanDetail.price}<span className="text-sm	">/ day</span></p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <NavLink end to='.' className={({ isActive }) => 
                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline font-semibold	" : " no-underline font-normal")}>Details</NavLink>
                    <NavLink to='pricing' className={({ isActive }) => 
                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline font-semibold	" : " no-underline font-normal	")} >Pricing</NavLink>
                    <NavLink to='photos' className={({ isActive }) => 
                                            'block mt-4 md:inline-block md:mt-0 text-base mr-4 '+ (isActive ? " underline font-semibold	" : " no-underline font-normal	")} >Photos</NavLink>
                </div>
                <Outlet context={{vanDetail}} />
            </div>
       </div>        
    )
}