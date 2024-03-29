import React from 'react';
import Navbarr from './estrutura/Navbar';
import styles from './css/Tecnologias.module.css';
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaGitSquare, FaVuejs, FaJava } from 'react-icons/fa';

export default function Tecnologias(){
    return(
        <div className={styles.body}>
            <Navbarr/>
            <h2 className='text-center mt-4'>Tecnologias</h2>
            <div className={`${styles.contIcons} container`}>
                <div className='container d-flex justify-content-around align-items-center'>
                    <div>
                        <FaHtml5 size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1`}>HTML</h4>
                    </div>
                    <div>
                        <FaCss3 size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1`}>CSS</h4>
                    </div>
                    <div>
                        <FaJs size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1 text-center`}>JS</h4>
                    </div>
                    <div>
                        <FaJava size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1 text-center`}>JAVA</h4>
                    </div>
                </div>
                <div className='container d-flex justify-content-around'>
                    <div>
                        <FaBootstrap size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1 text-center`}>BS</h4>
                    </div>
                    <div className='text-center'>
                        <FaReact size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1`}>REACT</h4>
                    </div>
                    <div>
                        <FaVuejs size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1 text-center`}>VUE</h4>
                    </div>
                    <div>
                        <FaGitSquare size={64} color='white' className={styles.icone}/>
                        <h4 className={`${styles.text} mt-1 text-center`}>GIT</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}