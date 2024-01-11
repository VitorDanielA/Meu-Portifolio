import React, { useState } from "react";
import styles from '../components/css/Calculadora.module.css'

export default function Pagina3(){

    const [expressao, setExpressao] = useState('');
    const [verifica, setVerifica] = useState(false);

    const digitos = (digito) => {
        return(
            <div className= "col-3">
                <label className= {`${styles.label} p-3 ms-3} `} onClick={() => adicionarDigitos(digito)}>{digito}</label>
            </div>
        )
    }

    const adicionarDigitos = (digito) => {

        let valor = expressao;
        setExpressao((prevSetExpressao) => prevSetExpressao + digito)

        if(digito === '='){
            setExpressao(calcularExpressao(expressao))
            setVerifica(true);
        } else if(digito === 'AC'){
            setExpressao('');
            setVerifica(false);
        } else if(digito === '<-' && valor.length >= 1){
            setExpressao(valor.substring(0,(valor.length-1)));
            setVerifica(false);
        } else if(verifica === true && digito === '<-'){
            setExpressao('')
        }
    }

    const calcularExpressao = () => {
        try{
            // eslint-disable-next-line no-eval
            return eval(expressao);
        } catch (error){
            return 'Erro na expressão';
        }
    }

    return(
        <div className={`${styles.body} d-flex justify-content-center align-items-center `} >
            <div className={styles.contt}>
                <h4 className="text-center mt-3">Calculadora Básica</h4>
                <div className={`${styles.calculo} mb-2`}>
                    <input className="p-3" value = {expressao}></input>
                </div>
                <div className={styles.digitos}>
                    <div className="row">
                        {digitos('AC')}
                        {digitos('(')}
                        {digitos(')')}
                        {digitos('/')}
                    </div>
                    <div className="row">
                        {digitos('7')}
                        {digitos('8')}
                        {digitos('9')}
                        {digitos('*')}
                    </div>
                    <div className="row">
                        {digitos('4')}
                        {digitos('5')}
                        {digitos('6')}
                        {digitos('-')}
                    </div>
                    <div className="row">
                        {digitos('1')}
                        {digitos('2')}
                        {digitos('3')}
                        {digitos('+')}
                    </div>
                    <div className="row">
                        {digitos(0)}
                        {digitos('.')}
                        {digitos('<-')}
                        {digitos('=')}
                    </div>
                </div>
            </div>
        </div>
    )
}