import React from "react";
import { useOutletContext} from "react-router-dom";


export default function Details(){
    const {vanDetail} = useOutletContext();

    console.log(vanDetail);
    return(
        <div className="grid gap-6 mt-6">
            <div>
                <p><span className="font-semibold">Name:</span> {vanDetail.name}</p>
            </div>
            <div>
               
                <p><span className="font-semibold">Category:</span> {vanDetail.type}</p>
            </div>
            <div>
                
                <p className="text-justify"><span className="font-semibold">Description:</span>  {vanDetail.description}</p>
            </div>
            <div>
               
                <p> <span className="font-semibold">Visibility:</span>  {vanDetail.name}</p>
            </div>
        </div>
    )
}