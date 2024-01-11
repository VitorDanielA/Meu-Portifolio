import React, { useState} from "react";
import styles from '../components/css/Pagina4.module.css'
import axios from 'axios';

export default function Pagina4(){

    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState([]);
    const [verifica, setVerifica] = useState(true);

    const buscarEndereco = async () => {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          setEndereco(response.data);
          setVerifica(false);
        } catch (error) {
            console.error('Erro ao buscar endereço:', error.message);
        }
    };

    const fecharModal = () => {
        setVerifica(true);
    }

    return(
        <div className={`${styles.body} d-flex justify-content-center align-items-center `}>
            <div className={styles.containerP}>
                <h1 className={`${styles.h1} text-center`}>API de CEP</h1>
                <p className={`${styles.p} text-center`}>Digite aqui um CEP para buscar suas informações</p>
                <input type="text" className={styles.input} onChange={(e) => setCep(e.target.value)}></input>
                <button className={`${styles.button} btn btn-primary mt-3`} onClick={() => buscarEndereco()}>Buscar</button>

                {verifica ? "" :
                    <div className={`${styles.info} mt-3 p-2`}>
                        <p className={`${styles.p}`}>CEP: {endereco.cep}</p>
                        <p className={`${styles.p}`}>DDD: {endereco.ddd}</p>
                        <p className={`${styles.p}`}>LOCALIDADE: {endereco.localidade}</p>
                        <p className={`${styles.p}`}>UF: {endereco.uf}</p>
                        <button className={`${styles.button_close} btn btn-primary mt-1`} onClick={() => fecharModal()}>Fechar</button>
                    </div>
                          
                }   
            </div>
        </div>
    )
}