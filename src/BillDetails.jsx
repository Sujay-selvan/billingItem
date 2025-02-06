import React from "react";
import './App.css'

export default function BillDetails(props){

    return(
        <>
            <div className="box" onClick={()=>props.fun(props)}>
                <p>₹ {props.price}</p>
                <img src={props.image}/>
                <h5>{props.name}</h5>
            </div>
        </>
    )
}