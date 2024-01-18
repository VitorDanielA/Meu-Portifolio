import React, { useState } from 'react';
import styles from './../css/QuizApp.module.css';
import QuestoesQuiz from '../estrutura/QuestoesQuiz';
import {Star} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function QuizApp(){

    const [viewBotao, setViewBotao] = useState(true);
    const [viewQuiz, setViewQuiz] = useState(false);
    const [seqQuiz, setSeqQuiz] = useState(0);
    const [qtdPontos, setQtdPontos] = useState(0);

    const botao = () => {
        return(
            <button className={`${styles.btn} btn`} onClick={() => {setViewBotao(false); setViewQuiz(true)}}>Começar Quiz</button>
        )
    }

    const regras = () => {
        return(
            <div className={styles.cardQuiz}>
                <h4 className='p-3'>Regras do Quiz</h4>
                <div className={`${styles.rules} py-2`}>
                    <ol>
                        <li>Serão 10 questões.</li>
                        <li>Você tem 15 segundos por questão.</li>
                        <li>Depois de selecionar, não pode voltar.</li>
                        <li>Não pode selecionar depois que o tempo acabar.</li>
                        <li>Se você não selecionar uma opção e avançar, não pode voltar.</li>
                        <li>Os pontos serão somados com a quantidade de acertos.</li>
                    </ol>
                </div>
                <div className='d-flex justify-content-between p-3'>
                    <button className={`${styles.btn} btn`} onClick={() => {setViewQuiz(false); setViewBotao(true)}}>Sair do Quiz</button>
                    <button className={`${styles.btn} btn`} onClick={() => {setSeqQuiz(1); setViewQuiz(false)}}>Começar</button>
                </div>
            </div>
        )
    }

    const resultado = () => {
        return(
            <div className={`${styles.cardQuiz} p-4 text-center`}>
                <p><Star size={128} color='white'/></p>
                <p><strong>Parabéns! Você concluiu com sucesso o Quiz</strong></p>
                <p>Sua pontuação foi de {qtdPontos}/10</p>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-primary' onClick={() => {setViewQuiz(true); setSeqQuiz(0); setQtdPontos(0)}}>Recomeçar Quiz</button>
                    <Link to='https://www.corinthians.com.br/' className='btn btn-primary'>Sair do Quiz</Link>
                </div>
            </div>
        )
    }

    return(
        <div className={`${styles.body} d-flex align-items-center justify-content-center `}>
            {viewBotao ? botao() : ""}
            {viewQuiz ? regras() : ""}
            {seqQuiz === 1 ? <QuestoesQuiz 
                questao = "1. Quantas copas do brasil atualmente o Corinthains possui?"
                choice1 = "2"
                choice2 = "3"
                choice3 = "1"
                choice4 = "4"
                numQuest = {1}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "B"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 2 ? <QuestoesQuiz 
                questao = "2. Quantos mundiais e libertadores o timão têm? "
                choice1 = "2 e 1"
                choice2 = "1 e 1"
                choice3 = "3 e 2"
                choice4 = "3 e 3"
                numQuest = {2}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "A"
                setQtdPontos = {setQtdPontos}
            /> : ""}

            {seqQuiz === 3 ? <QuestoesQuiz 
                questao = "3. Qual o maior ídolo do Corinthians? "
                choice1 = "Craque Neto"
                choice2 = "Marcelinho Carioca"
                choice3 = "Dida"
                choice4 = "Cássio"
                numQuest = {3}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "D"
                setQtdPontos = {setQtdPontos}
            /> : ""}

            {seqQuiz === 4 ? <QuestoesQuiz 
                questao = "4. Quem fez o gol do título mundial em 2012? "
                choice1 = "Fábio Santos"
                choice2 = "Ralf"
                choice3 = "Guerreiro"
                choice4 = "Danilo"
                numQuest = {4}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "C"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 5 ? <QuestoesQuiz 
                questao = "5. Quantos gols de falta Craque Neto fez pelo Corinthians? "
                choice1 = "21"
                choice2 = "30"
                choice3 = "24"
                choice4 = "42"
                numQuest = {5}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "C"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 6 ? <QuestoesQuiz 
                questao = "6. Quantos campeonatos brasileiros o Corinthians têm? "
                choice1 = "7"
                choice2 = "6"
                choice3 = "5"
                choice4 = "8"
                numQuest = {6}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "A"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 7 ? <QuestoesQuiz 
                questao = "7. Quantos campeonatos paulista o Corinthians têm? "
                choice1 = "32"
                choice2 = "36"
                choice3 = "28"
                choice4 = "30"
                numQuest = {7}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "D"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 8 ? <QuestoesQuiz 
                questao = "8. Qual o maior artilheiro da arena Corinthians? "
                choice1 = "Romero"
                choice2 = "Roger Guedes"
                choice3 = "Yuri Alberto"
                choice4 = "Jô"
                numQuest = {8}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "B"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 9 ? <QuestoesQuiz 
                questao = "9. Quantas copinhas o Corinthians têm? "
                choice1 = "9"
                choice2 = "10"
                choice3 = "5"
                choice4 = "7"
                numQuest = {9}
                botaoNext = "Próximo"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "B"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 10 ? <QuestoesQuiz 
                questao = "10. De quem o Corinthians venceu a final do mundial em 2000 e 2012? "
                choice1 = "Real Madrid e Chelsea"
                choice2 = "Manchester U e Bayern"
                choice3 = "Vasco e Chelsea"
                choice4 = "Real Madrid e Milan"
                numQuest = {10}
                botaoNext = "Finalizar"
                setSeqQuiz = {setSeqQuiz}
                questaoCerta = "C"
                setQtdPontos = {setQtdPontos}
            /> : ""}
            {seqQuiz === 11 ? resultado() : ""}
        </div>
    )
}