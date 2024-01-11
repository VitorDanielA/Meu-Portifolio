import React from "react";
import Navbar from "./estrutura/Navbar";
import ContainerProjetos from "./estrutura/ContainerProjetos";
import calculadora from "./imgs/calculadora.png";
import styles from './css/Projetos.module.css';
import ContainerProjetosInvertido from "./estrutura/ContainerProjetosInvertido";
import buscadorCep from "./imgs/buscadorCep.png";
import calculadoraIMC from './imgs/calculadoraIMC.png';
import buscadorClima from './imgs/API de Clima.png';
import FormularioMultiEtapa from './imgs/FormularioMultiEtapas.png';
import ToDoList from './imgs/ToDoList.png';
import QuizApp from "./imgs/quizApp.png";

export default function Projetos(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <h2 className={`${styles.h1} mt-4`}>Meus Projetos</h2>
                <ContainerProjetos
                    titulo = 'API de Clima'
                    imagem = {buscadorClima}
                    caminho = '/buscadorClima'
                    descricao = 'Consumindo API climática para buscar o clima do dia de qualquer cidade do mundo, e suas informações mais detalhadas.'
                    tecnologia1 = 'API'
                    tecnologia2 = 'React JS'
                    tecnologia3 = 'Bootstrap'
                />
                <ContainerProjetosInvertido
                    titulo = 'Quiz APP'
                    imagem = {QuizApp}
                    caminho = '/quizApp'
                    descricao = 'Quiz com 5 questões sobre um time de futebol para testar os conhecimentos daquela equipe e saber sua pontuação no final.'
                    tecnologia1 = 'React JS'
                    tecnologia2 = 'Bootstrap'
                />
                <ContainerProjetos
                    titulo = 'Formulário Multi Etapa'
                    imagem = {FormularioMultiEtapa}
                    caminho = '/formMultiStep'
                    descricao = 'Projeto do Frontend Mentor, na qual o objetivo é uma simulação de um formulário por etapas. (faltam ajustes de responsividade para mobile).'
                    tecnologia1 = 'React JS'
                    tecnologia2 = 'Bootstrap'
                />
                <ContainerProjetosInvertido
                    titulo = 'API de CEP'
                    imagem = {buscadorCep}
                    caminho = '/buscadorCep'
                    descricao = 'Consumindo API para buscar qualquer CEP do Brasil, além de mostrar informações como o DDD, também apresenta à Localidade e UF.'
                    tecnologia1 = 'API'
                    tecnologia2 = 'React JS'
                />   
                <ContainerProjetos
                    titulo = 'To Do List'
                    imagem = {ToDoList}
                    caminho = '/toDoList'
                    descricao = 'Criação de uma lista de afazeres (TodoList), para registrar tarefas pendentes e excluí-las após a conclusão de cada uma.'
                    tecnologia1 = 'React JS'
                    tecnologia2 = 'Bootstrap'
                />
                <ContainerProjetosInvertido 
                    titulo = 'Calculadora' 
                    imagem = {calculadora}
                    caminho = '/calculadora' 
                    descricao = 'Calculadora básica feita no React, utilizando os conceitos básicos da tecnologia, além de uma implementação do bootstrap em conjunto.'
                    tecnologia1 = 'React JS'
                    tecnologia2 = 'Bootstrap'
                />
                <ContainerProjetos
                    titulo = 'Calculadora IMC' 
                    imagem = {calculadoraIMC}
                    caminho = '/calculadoraIMC' 
                    descricao = 'Uma calculadora de Índice de Massa Corporal (IMC) desenvolvida em React e estilizada com Bootstrap juntamente com a descrição de cada classificação.'
                    tecnologia1 = 'React JS'
                    tecnologia2 = 'Bootstrap'
                />
            </div>
        </div>
    )
}