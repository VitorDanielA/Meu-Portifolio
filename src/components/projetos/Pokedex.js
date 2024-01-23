import React, {useState, useEffect} from "react";
import NavBarPokedex from "../estrutura/NavBarPokedex";
import styles from './../css/Pokedex.module.css';
import PokemonCard from "../estrutura/PokemonCard";

export default function Pokedex(){

  const [pokemonLista, setPokemonLista] = useState([]);
  const [pokemonDetalhes, setPokemonDetalhes] = useState(null);
  const [pokemonNome, setPokemonNome] = useState('');  

  useEffect(() => {
    const fetchPokemonLista = async () => {
      try{
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=92');
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
      try{
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

  const filteredPokemonList = pokemonLista.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonNome.toLowerCase()));

  return(
    <div className="">
      <NavBarPokedex/>
        <div className="text-center">
          <h1 className={`${styles.title_color} text-center mt-5`}>Bem vindo a Pokédex</h1>
          <h3 className={`${styles.title_color} text-center`}>Busque um pokemon</h3>
          <div className="form-group container w-100 d-flex justify-content-center mt-5">
            <input 
              type="text" 
              class={`${styles.input} form-control text-center `} 
              placeholder="Busque o Pokemon"
              onChange={(e) => setPokemonNome(e.target.value)}
            />
          </div>
          </div>
          <div className="container d-flex flex-wrap justify-content-around mt-5">
            {filteredPokemonList.map((pokemon, index) => (
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
