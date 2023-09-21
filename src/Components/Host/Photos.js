import React from "react";
import { useOutletContext} from "react-router-dom";

export default function Photos(){
    const {vanDetail} = useOutletContext();

    return(
        <img src={vanDetail.imageUrl} alt='imageUrl' className="rounded w-3/12 mt-6"/>
    )
}