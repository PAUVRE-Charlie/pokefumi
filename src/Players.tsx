import React from 'react'
import { User } from './types';

  

export default function Players() {
    
    const charlie : User = {id: 1, name: "Charlie"};
    const pierre : User = {id: 2, name: "Pierre"};
    const simon : User = {id: 3, name: "Simon"};

    var players : User[] = [
        pierre, charlie, simon
    ];
    players.sort( function (a,b) {
        return a.name.localeCompare(b.name);});
    
    return (
        <div>
            <ul className="listPlayers">
            {
                players.map((player) => <li>{player.name}</li>)
            }
            </ul>

        </div>
    )
}
