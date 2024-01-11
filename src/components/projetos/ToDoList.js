import React, { useState } from "react";
import styles from './../css/TodoList.module.css';
import {Trash} from 'react-bootstrap-icons';

export default function ToDoList(){

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState('');
    const [, setLastValue] = useState('');

    const adicionarItem = () => {
        setLista([...lista, novoItem]);
        setLastValue(novoItem);
        setNovoItem('');
    };

    const excluirItem = (index) => {
        const novaLista = lista.filter((i) => i !== index);
        setLista(novaLista);
    }

    const mostrarLista = () => {
        return(
            <>
            {lista.map((item, index) => (
                <div className={`${styles.lista} d-flex align-items-center justify-content-between ps-2 mb-3`}>
                    <li key={index} className="pe-2">{item}</li>
                    <button className="btn btn-dark me-1" onClick={() => excluirItem(item)}><Trash size={16} color="white" ></Trash></button>
                </div>
            ))}
            </>
        )
    }

    
    return(
        <div className={`${styles.body} d-flex justify-content-center align-items-center`}>
            <div className={styles.containerMain}>
                <h1 className="text-center fw-bolder">To Do List</h1>
                <p className="text-center fw-bold">Adicione uma nova tarefa na lista</p>
                {lista ? mostrarLista() : ''}
                <div className="d-flex my-4">
                    <input type="text" className="form-control" maxLength={25} value={novoItem} onChange={(e) => setNovoItem(e.target.value)}></input>
                </div>
                <button className="btn btn-dark w-100 mb-3" onClick={() => adicionarItem()}>Adicionar</button>
            </div>
        </div>
    )
}