import React, { useEffect, useState } from "react";
import styles from '../css/ContainerProjetos.module.css';
import {Link} from 'react-router-dom';
import {Eye, Code} from 'react-bootstrap-icons';

export default function ContainerProjetosInvertido(props){

    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleResize = () => {
          setLarguraJanela(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const containerDescricao = () =>{
        return(
            <div className={`${styles.contDescricaoInvertido} me-5`}>
                <h3 className={`${styles.titulo} mt-3`}>{props.titulo}</h3>
                <p className='mt-3'>{props.descricao}</p>
                <p><strong className='me-3'>{props.tecnologia1}</strong> <strong>{props.tecnologia2}</strong> <strong className="ms-3">{props.tecnologia3}</strong> </p>
                <div className='mt-4'>
                    <Link to={props.caminho} target={props.target} className='btn btn-dark'><Eye size={16} color="white"/></Link>
                    <Link to='' className='btn btn-dark ms-3'><Code size={16} color="white"/></Link>
                </div>
            </div>
        )
    }

    const containerImagem = () =>{
        return(
            <div className={`${styles.container} me-1`}>
                <Link to={`${props.caminho}`}><img alt='projeto' src={props.imagem} className={styles.img}></img></Link>
            </div>
        )
    }

    return(
        <div className={`${styles.containerPrincipal} container mt-5`}>
            {larguraJanela >= 992 ? (
        <>
          {containerDescricao()}
          {containerImagem()}
        </>
      ) : (
        <>
          {containerImagem()}
          {containerDescricao()}
        </>
      )}
        </div>
    )
}