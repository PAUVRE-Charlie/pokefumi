import React from 'react'
import { Match, Player, User } from './types';
import PokemonHttpService from './httpService';

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

    const pokeApiClient = new PokemonHttpService();

    let promise = pokeApiClient.get('https://pokeapi.co/api/v2/ability/1/');

    console.log(promise);

  
    

    return (
        <div>
            {/* <ul className="listPlayers">
            {
                players.map((player) => <li>{players.indexOf(player)+1 + '. ' + player.user.name}</li>)
            }
            </ul> */}
        </div>
    )
}
