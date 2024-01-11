import React from "react";

export default function Inserts(props){
    return(
        <div className="mt-3">
            <label className='form-label'><strong>{props.titulo}</strong></label>
            <input type="text" className='form-control' placeholder={props.placeholder} required></input>
        </div>
    )
}