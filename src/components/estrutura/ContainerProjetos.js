import React from 'react';
import styles from '../css/ContainerProjetos.module.css';
import {Link} from 'react-router-dom';
import {Eye, Code} from 'react-bootstrap-icons';

export default function ContainerProjetos(props){
    return(
        <div className={`${styles.containerPrincipal} container mt-5`}>
            <div className={`${styles.container}`}>
                <Link to={`${props.caminho}`}><img alt='projeto' src={props.imagem} className={styles.img}></img></Link>
            </div>
            <div className={`${styles.contDescricao} `}>
                <h3 className={styles.titulo}>{props.titulo}</h3>
                <p className='mt-3'>{props.descricao}</p>
                <p><strong className='me-3'>{props.tecnologia1}</strong> <strong>{props.tecnologia2}</strong></p>
                <div className='mt-4'>
                    <Link to={props.caminho} className='btn btn-dark'><Eye size={16} color="white"/></Link>
                    <Link to='' className='btn btn-dark ms-3'><Code size={16} color="white"/></Link>
                </div>
            </div>
        </div>
    )
}