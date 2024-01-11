import React from "react";
import styles from './../css/ModeloPlano.module.css';
import style from './../css/FormMultiStep.module.css';

export default function ModeloPlano(props){
    return(
        <div className={`${styles.modeloPlano} p-2 me-3`}>
            <img alt = 'plano' src={props.icone}></img>
            <div className="mt-5">
                <strong className={style.titleStep}>{props.titulo}</strong>
                <p>{props.preco}</p>
            </div>
        </div>
    )
}