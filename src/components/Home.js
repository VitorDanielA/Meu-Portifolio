import React from 'react';
import Navbarr from './estrutura/Navbar';
import Code from './imgs/Asset_3.svg';
import iconGithub from './imgs/placa-do-github.png'
import iconLinkedin from './imgs/logotipo-do-linkedin.png';
import styles from './css/Home.module.css';
import {Link} from 'react-router-dom';
import Footer from './estrutura/Footer';


export default function Rotas(){

  return(
    <>
      <Navbarr/>
      <div className={`${styles.body} d-flex justify-content-center align-items-center body`}>
        <div className={`${styles.textContainer} me-4`}>
          <h4>Olá Mundo,</h4>
          <h2>
            <label className={styles.strong}>Eu sou um 
              <p className={styles.writed}>Desenvolvedor Frontend</p> 
            </label> 
            <h4>Bem vindo ao meu Portifólio</h4>
          </h2>
          <Link to ='/sobre'><button className={`${styles.btn} mt-3`}>Mais sobre mim</button></Link>
          <div className='d-flex mt-4'>
            <Link to='https://github.com/VitorDanielA?tab=repositories' target='_blank'><img alt='Github' src={iconGithub} className={`${styles.icons} me-4`} ></img></Link>
            <Link to='https://www.linkedin.com/in/vitor-daniel-almeida-silva-738066283/' target='_blank'><img alt='Linkedin' src={iconLinkedin} className={styles.icons}></img></Link>
          </div>
        </div>
        <div>
          <img alt = 'programador' src={Code} className={`${styles.img} mt-2 ms-5`}></img>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
