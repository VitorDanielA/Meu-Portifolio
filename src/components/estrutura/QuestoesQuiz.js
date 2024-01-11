import React, {useState, useEffect} from "react";
import styles from './../css/QuizApp.module.css';

export default function QuestoesQuiz(props){

    const [segundos, setSegundos] = useState(15);
    const [desabilitar, setDesabilitar] = useState(false);
    const [respostaCorreta, setRespostaCorreta] = useState(1);
    const [, setValue] = useState();
    const [botaoClicado, setBotaoClicado] = useState(null);
    const letraA = "A", letraB = "B", letraC = "C", letraD = "D";

    const atualizarSeqQuiz = () => {
        props.setSeqQuiz((prevSetSeqQuiz) => prevSetSeqQuiz + 1);
    };

    const atualizarQtdPontos = () => {
        props.setQtdPontos((prevSetQtdPontos) => prevSetQtdPontos + 1);
    }

    const verificaQuestao = (opcaoSelecionada) => {

        setBotaoClicado(opcaoSelecionada);
        const respostaCerta = props.questaoCerta;
        const numeroQuestao = props.numQuest;

        if(respostaCerta === letraB && numeroQuestao === 1 && opcaoSelecionada === 2){
            setRespostaCorreta(2);
            setDesabilitar(true);
            atualizarQtdPontos();
        } else if(respostaCerta === letraA && numeroQuestao === 2 && opcaoSelecionada === 1){
            setRespostaCorreta(2);
            setDesabilitar(true);
            atualizarQtdPontos();
        } else if(respostaCerta === letraD && numeroQuestao === 3 && opcaoSelecionada === 4){
            setRespostaCorreta(2);
            setDesabilitar(true);
            atualizarQtdPontos();
        } else if(respostaCerta === letraC && numeroQuestao === 4 && opcaoSelecionada === 3){
            setRespostaCorreta(2);
            setDesabilitar(true);
            atualizarQtdPontos();
        } else if(respostaCerta === letraC && numeroQuestao === 5 && opcaoSelecionada === 3){
            setRespostaCorreta(2);
            setDesabilitar(true);
            atualizarQtdPontos();
        } else {
            setRespostaCorreta(3);
            setDesabilitar(true);
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
          setSegundos((prevSegundos) => prevSegundos - 1);

          if(segundos < 1){
            setDesabilitar(true);
            clearInterval(intervalo);
          }
        }, 1000);
        return () => clearInterval(intervalo);
    }, [segundos]);

    return(
        <div className={styles.cardQuiz}>
            <div className='d-flex justify-content-around p-3'>
                <h5 className='d-flex align-items-lg-centert mt-2 me-5'>Quiz do Corinthians</h5>
                <button className={`btn btn-light`}>00:{segundos > 0 ?  segundos : "0"}</button> 
            </div>
            <div className={`${styles.rules} py-3 text-center`}>
                <h5 className="px-3">{props.questao}</h5>
                <div className='d-flex flex-column justify-content-center  align-items-center'>
                    <button className={`${styles.btnChoice} btn mt-3 w-75 text-start`} disabled = {desabilitar} onClick={() => {setValue(1); verificaQuestao(1)}}><label className={`${styles.choice} me-2 text-center`}>{letraA}</label>{props.choice1} {botaoClicado === 1 && (
                    <span className="d-flex float-end pt-1">{respostaCorreta === 2 ? '✅' : '❌'}</span>
                    )} </button>
                    <button className={`${styles.btnChoice} btn mt-3 w-75 text-start`} disabled = {desabilitar}onClick={() => {setValue(2); verificaQuestao(2)}}><label className={`${styles.choice} me-2 text-center`}>{letraB}</label>{props.choice2} {botaoClicado === 2 && (
                    <span className="d-flex float-end pt-1">{respostaCorreta === 2 ? '✅' : '❌'}</span>
                    )} </button>
                    <button className={`${styles.btnChoice} btn mt-3 w-75 text-start`} disabled = {desabilitar} onClick={() => {setValue(3); verificaQuestao(3); }} value={3}><label className={`${styles.choice} me-2 text-center`}>{letraC}</label>{props.choice3} {botaoClicado === 3 && (
                    <span className="d-flex float-end pt-1">{respostaCorreta === 2 ? '✅' : '❌'}</span>
                    )} </button>
                    <button className={`${styles.btnChoice} btn mt-3 w-75 text-start`} disabled = {desabilitar} onClick={() => {setValue(4); verificaQuestao(4)}} value={4}><label className={`${styles.choice} me-2 text-center`}>{letraD}</label>{props.choice4}{botaoClicado === 4 && (
                    <span className="d-flex float-end pt-1">{respostaCorreta === 2 ? '✅' : '❌'}</span>
                    )}</button>
                </div>
            </div>
            <div className='d-flex justify-content-between p-3'>
                <p className='pt-3 ps-3'>{props.numQuest} de 5 Questões</p>
                <button className={`btn btn-light h-50 mt-2 me-2`} onClick={() => atualizarSeqQuiz()}>{props.botaoNext}</button>
            </div>
        </div>
    )
}   