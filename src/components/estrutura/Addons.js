import React from "react";
import styles from './../css/Addons.module.css';

export default function Addons(props){
    return(
        <div>
            <div class={`${styles.addContainer} form-check d-flex justify-content-around align-items-center mt-3`}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label pt-3" for="flexCheckDefault">
                    <strong>{props.title}</strong>
                    <p>{props.description}</p>
                </label>
                <p className="pt-3">{props.price}</p>
            </div>
        </div>
    )
}