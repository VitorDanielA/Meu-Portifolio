import React from "react";
import styles from './../css/FormMultiStep.module.css';

export default function Steps(props){
    return(
        <div className={`${styles.containerSteps} d-flex justify-content-center align-items-center`}>
            <div className="me-3">
                <p className={props.verifyStep ? styles.active : styles.circleNumber}>{props.number}</p>
            </div>  
            <div>
                <p className={`${styles.step} mb-2`}>{props.step} <p className={styles.info}>{props.info}</p></p>
            </div>
        </div>
    )
}