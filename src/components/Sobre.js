import React from "react";
import Navbarr from "./estrutura/Navbar";
import styles from './../components/css/Sobre.module.css';
import Footer from "./estrutura/Footer";
import imgSobre from "./../components/imgs/Sobre.svg";

export default function Sobre(){
    return(
        <div className={styles.body}>
            <Navbarr/>
            <div className={`${styles.contSobre} d-flex justify-content-center align-items-center`}>
                <p className={`${styles.about}`}><h2>Vitor Daniel</h2>Olá! Eu tenho 22 anos, moro em Irecê/BA, sou estudante de Análise e Desenvolvimento de Sistemas, e programador desde 2019 (Expectativa de graduação em 2024). Apaixonado pela área de frontend e suas tecnologias, além de ser um amante de futebol, handebol e jogos eletrônicos no geral. </p>
                <div>
                    <img alt = 'Sobre' src={imgSobre} className={`${styles.img} ms-5`}></img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}