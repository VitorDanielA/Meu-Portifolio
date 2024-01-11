import React, { useState } from 'react';
import styles from '../components/css/CalculadoraIMC.module.css'

export default function Appp(){

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState(0);

    console.log(peso, altura)

    const calcular = () => {
        setImc(peso/(altura/100 * altura/100));
    }

    return(
        <div className={`${styles.body} d-flex align-items-center justify-content-center`}>         
            <div className={`${styles.containerr} p-3`}>
                <h1 className='text-center'>Calculadora de IMC</h1>

                <div>
                    <label className='form-label mt-1'>Informe seu peso em KG:</label>
                    <input type='text' onChange={(p) => setPeso(p.target.value)} className='form-control'></input>
                </div>
                
                <div>
                    <label className='form-label mt-1'>Informe a sua altura CM:</label>
                    <input type='text' onChange={(a) => setAltura(a.target.value)} className='form-control'></input>
                </div>
                
                <div className='text-center my-2'>
                    <button className={`${styles.button} btn btn-primary`} onClick={() => calcular()}>Calcular</button>
                </div>
                
                <label className='mb-1'>Resultado: <span>{imc === 0 ?  0 : imc.toFixed(1)}</span></label>

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Classificação</th>
                            <th>IMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Abaixo do Peso</td>
                            <td>Abaixo de 18,5</td>
                        </tr>
                        <tr>
                            <td>Peso Normal</td>
                            <td>Entre 18,5 e 24,9</td>
                        </tr>
                        <tr>
                            <td>Sobrepeso</td>
                            <td>25 e 29,9</td>
                        </tr>
                        <tr>
                            <td>Obesidade grau 1</td>
                            <td>Entre 30 e 34,9</td>
                        </tr>
                        <tr>
                            <td>Obesidade grau 2</td>
                            <td>Entre 35 e 39,9</td>
                        </tr>
                        <tr>
                            <td>Obesidade grau 3 ou Mórbida</td>
                            <td>Maior que 40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}