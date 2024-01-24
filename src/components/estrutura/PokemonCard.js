import React, {useState} from 'react';
import styles from './../css/Pokedex.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PokemonCard(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    const traduzirTipos = (tipo) => {

        const traducoes = {
          'grass' : 'Grama',
          'poison' : 'Veneno',
          'fire' : 'Fogo',
          'flying' : 'Voador',
          'water' : 'Água',
          'bug' : 'Inseto',
          'normal' : 'Normal',
          'electric' : 'Elétrico',
          'ground' : 'Terra',
          'fairy' : 'Fada',
          'fighting' : 'Lutador',
          'psychic' : 'Psíquico',
          'rock' : 'Pedra',
          'steel' : 'Aço',
          'ice' : 'Gelo',
          'ghost' : 'Fantasma',
          'dragon' : 'Dragão'
        }
  
        return traducoes[tipo.toLowerCase()] || tipo;
    }

    const coresBg = (tipo) => {

        const coresStyle = {
            'grass': styles.pokemonGrama,
            'electric' : styles.pokemonEletrico,
            'ice' : styles.pokemonGelo,
            'steel' : styles.pokemonAco,
            'rock' : styles.pokemonPedra,
            'fire' : styles.pokemonFogo,
            'fighting' : styles.pokemonLutador,
            'poison' : styles.pokemonVeneno,
            'flying' : styles.pokemonVoador,
            'psychic' : styles.pokemonPsi,
            'water' : styles.pokemonAgua,
            'fairy' : styles.pokemonFada,
            'bug' : styles.pokemonInseto,
            'ground' : styles.pokemonTerra,
            'normal' : styles.pokemonNormal,
            'ghost' : styles.pokemonFantasma,
            'dragon' : styles.pokemonDragao
        }

        return coresStyle[tipo] ?? '';
    }

    const coresCards = (tipo) => {

        const coresStyle = {
            'grass': styles.pokemonGramaCard,
            'electric' : styles.pokemonEletricoCard,
            'ice' : styles.pokemonGeloCard,
            'steel' : styles.pokemonAcoCard,
            'rock' : styles.pokemonPedraCard,
            'fire' : styles.pokemonFogoCard,
            'fighting' : styles.pokemonLutadorCard,
            'poison' : styles.pokemonVenenoCard,
            'flying' : styles.pokemonVoadorCard,
            'psychic' : styles.pokemonPsiCard,
            'water' : styles.pokemonAguaCard,
            'fairy' : styles.pokemonFadaCard,
            'bug' : styles.pokemonInsetoCard,
            'ground' : styles.pokemonTerraCard,
            'normal' : styles.pokemonNormalCard,
            'ghost' : styles.pokemonFantasmaCard,
            'dragon' : styles.pokemonDragaoCard
        }

        return coresStyle[tipo] ?? '';
    }

    return(
        <div className={`${props.habilidades[0] ? coresCards(props.habilidades[0].type.name) : ''} card mx-2 my-3`} style={{width: '16rem'}}>
            <img src={props.imgPokemon} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">
                    <strong className='text-uppercase'>{props.nome}</strong>
                    <div className='d-flex justify-content-center'>
                        {props.habilidades.map((tipo, index) => (
                        <p key={index} className={`${coresBg(tipo.type.name)} mt-3 me-2`}>{traduzirTipos(tipo.type.name)}</p>
                        ))}
                    </div>
                </h5>
                <p className="card-text"></p>
                <button href="#" className={`${styles.btn} btn container`} onClick={handleShow}>Informações</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton  className={`${props.habilidades[0] ? coresCards(props.habilidades[0].type.name) : ''}`}>
                    <Modal.Title>Informações do Pokémon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={`${props.habilidades[0] ? coresCards(props.habilidades[0].type.name) : ''}`}>
                        <img src={props.imgPokemon} className={`${styles.imgModal} card-img-top`} alt="..."></img>
                        <p className='text-uppercase'>{props.nome}</p>
                        <p>Experiência inicial: {props.experiencia}</p>
                        <p>Habilidade: {props.abilitie1}</p>
                        <p>Altura: {(props.altura / 10).toFixed(1)} m</p>
                        <p>Peso: {(props.peso * 0.1).toFixed(1)} kg</p>
                    </Modal.Body>
                    <Modal.Footer  className={`${props.habilidades[0] ? coresCards(props.habilidades[0].type.name) : ''}`}>
                    <Button variant="light" onClick={handleClose}>
                        Fechar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}