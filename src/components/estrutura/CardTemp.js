import React from "react";
import styles from './../css/BuscadorClima.module.css';

export default function CardTemp(props){
    return(
        <>        
            <div className={`${styles.cardTemp} text-center p-2`}>
                {props.icone}
                <p className="my-1">{props.text}</p>
                <p>{props.temp ? props.temp : "30"}°C</p>
            </div>
        </>
    )
}