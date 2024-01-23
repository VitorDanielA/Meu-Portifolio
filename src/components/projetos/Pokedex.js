import React, {useState, useEffect} from "react";
import NavBarPokedex from "../estrutura/NavBarPokedex";
import styles from './../css/Pokedex.module.css';
import PokemonCard from "../estrutura/PokemonCard";

export default function Pokedex(){

    const [pokemonLista, setPokemonLista] = useState([]);
    const [pokemonDetalhes, setPokemonDetalhes] = useState(null);
    

    useEffect(() => {
        const fetchPokemonLista = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=60');
            const data = await response.json();
            setPokemonLista(data.results);

            const detalhesInicial = Object.fromEntries(data.results.map(pokemon => [pokemon.url, null]));
            setPokemonDetalhes(detalhesInicial);

            data.results.forEach(pokemon => {
            fetchPokemonDetails(pokemon.url);
            });
          } catch (error) {
            console.error('Erro ao buscar dados dos Pokémon', error);
          }
        };

        const fetchPokemonDetails = async (url) => {
            try {
              const response = await fetch(url);
              const data = await response.json();
              console.log('Detalhes do Pokémon:', data);
              setPokemonDetalhes(prevDetalhes => ({
                ...prevDetalhes,
                [url]: data,
              }));
            } catch (error) {
              console.error('Erro ao buscar detalhes do Pokémon', error);
            }
        };

        fetchPokemonLista();

    }, []);

    return(
        <div className="">
            <NavBarPokedex/>
            <h1 className={`${styles.title_color} text-center mt-5`}>Bem vindo a Pokédex</h1>
            <h3 className={`${styles.title_color} text-center`}>Busque um pokemon</h3>
            <div className="container d-flex flex-wrap justify-content-around mt-5">
                {pokemonLista.map((pokemon, index) => (
                    <PokemonCard 
                        index = {index + 1} 
                        nome = {pokemon.name}
                        habilidades={pokemonDetalhes[pokemon.url] && pokemonDetalhes[pokemon.url].types ? pokemonDetalhes[pokemon.url].types : []} 
                        imgPokemon = {pokemonDetalhes[pokemon.url] && pokemonDetalhes[pokemon.url].sprites ? pokemonDetalhes[pokemon.url].sprites.front_default : ""}
                    />
                ))}
                
            </div>
        </div>
    )
}

// {/* <ul>
//                 {pokemonLista.map((pokemon, index) => (
//                     <div>
//                         <li key={index}>{pokemon.name} <button className="btn btn-primary" onClick={() => fetchPokemonDetails(pokemon.url)}>Buscar dados</button></li>
//                         {pokemonDetalhes && pokemonDetalhes.sprites && (
//                         <div>
//                             <h2>Detalhes do Pokémon</h2>
//                             <p>Back Default Sprite: {pokemonDetalhes.sprites.back_default}</p>
//                             <img src={pokemonDetalhes.sprites.back_default} alt="Back Default Sprite" />
//                         </div>
//                         )}
//                     </div>
//                 ))}
//             </ul> */}