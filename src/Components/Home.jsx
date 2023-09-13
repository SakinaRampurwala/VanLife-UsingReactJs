import React from "react";

export default function Home(){
    return(
        <div className='bg-scroll grid place-items-center bg-center	bg-cover h-full w-full' style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/BackgroundImage.png'})`,
            backgroundRepeat: 'no-repeat',
          }}>

            <div className="grid p-20 gap-8 text-white lg:max-w-screen-lg md:max-w-screen-md">
                <h2 className="md:text-6xl text-5xl font-bold">You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="mt-2 rounded bg-[#ffae42] p-2">Find your Van</button>
            </div>
            
        </div>
    )
}