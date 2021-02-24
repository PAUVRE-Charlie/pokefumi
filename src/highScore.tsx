import React from 'react'
import { Match, Player, User, Pokemon } from './types';
import PokemonHttpService from './httpService';
import { useState } from 'react';

export default function HighScore() {

    //  const charlie : User = {id: 1, name: "Charlie"};
    // const pierre : User = {id: 2, name: "Pierre"};
    // const simon : User = {id: 3, name: "Simon"};

    // var users : User[] = [
    //     pierre, charlie, simon
    // ];

    // var matchs: Match[] = [
    //     {
    //         id: 1,
    //         idPlayer1: 1,
    //         idPlayer2: 2,
    //         winner: 1,
    //         rounds: [
    //             {
    //                 matchId: 1,
    //                 pokemonPlayer1: 'Charlie',
    //                 pokemonPlayer2: 'Pierre',
    //                 roundNumber: 1,
    //                 status: "FINISHED",
    //                 winner: 'Charlie',
    //             }
    //         ],
    //         status: "FINISHED"
    //     }
    // ]

    // var players: Player[] = [];

    // users.forEach((user) =>
    //     players = [...players, {user: user, wins: 0}]
    // );

    // for(var i:number = 0; i<matchs.length; i++){
    //     var match = matchs[i];
    //     var player = players.find((player) => player.user.id === match.winner); 
    //     if(player != null) player.wins = player.wins + 1;
    // }

    // console.log(players);

    // players.sort( function (a,b) {
    //     return b.wins - a.wins;});

    // console.log(players);

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pokemon, setPokemon] = useState<Pokemon>();

    const pokeApiClient = new PokemonHttpService();


    pokeApiClient.getPokemon(113).then(pokemon => {
        console.log(pokemon);
        setPokemon(pokemon.results);
    });

    

    return (
        <div>
            {/* {
                pokemons.length > 0 ? pokemons.map((pokemon) => {return <div>{pokemon.name}<br/></div>}) : <li>No pokemons</li>
            } */}
            {
                (pokemon !== undefined) ? <li>{pokemon?.name}</li> : <li>No pokemon</li>
            }
            {/* <ul className="listPlayers">
            {
                players.map((player) => <li>{players.indexOf(player)+1 + '. ' + player.user.name}</li>)
            }
            </ul> */}
        </div>
    )
}
