import React from 'react';

export default function PokemonCard(props){
    return(
        <div className="card mx-2 my-4" style={{width: '18rem'}}>
            <img src={props.imgPokemon} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">
                    <strong className='text-uppercase'>{props.nome}</strong>
                    {props.habilidades.map((tipo, index) => (
                    <li key={index}>{tipo.type.name}</li>
                    ))}
                </h5>
                <p className="card-text">{props.index}</p>
                <button href="#" className="btn btn-warning">Informações</button>
            </div>
        </div>

    )
}