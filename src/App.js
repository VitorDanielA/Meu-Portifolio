import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Appp from "./components/CalculadoraIMC";
import Rotas from "./../src/components/Home"
import Calculadora from "./components/Calculadora";
import BuscadorCep from "./components/BuscadorCep";
import BuscadorClima from "./components/BuscadorClima";
import Projetos from "./components/Projetos";
import Tecnologias from "./components/Tecnologias";
import Sobre from "./components/Sobre";
import FormMultiStep from "./components/FormMultiStep";
import ToDoList from "./components/projetos/ToDoList";
import QuizApp from "./components/projetos/QuizApp";
import Pokedex from "./components/projetos/Pokedex";
 
function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Rotas/>}/>
                <Route path="/calculadoraIMC" element={<Appp/>}/>
                <Route path="/calculadora" element={<Calculadora/>}/>
                <Route path="/buscadorCep" element={<BuscadorCep/>}/>
                <Route path="/buscadorClima" element={<BuscadorClima/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
                <Route path="/tecnologias" element={<Tecnologias/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/formMultiStep" element = {<FormMultiStep/>}/>
                <Route path="/toDoList" element = {<ToDoList/>}/>
                <Route path="/quizApp" element = {<QuizApp/>}/>
                <Route path="/pokedex" element = {<Pokedex/>}/>
            </Routes>
        </Router>
    )       
}

export default App;
