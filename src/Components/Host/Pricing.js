import React from "react";
import { useOutletContext} from "react-router-dom";

export default function Pricing(){
    const {vanDetail} = useOutletContext();

    return(
        <h1 className="font-bold text-2xl  py-6">${vanDetail.price}.00<span className="font-normal">/day</span></h1>
    )
}