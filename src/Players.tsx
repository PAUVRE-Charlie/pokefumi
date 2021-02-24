import { link } from 'fs';
import { type } from 'os'
import React from 'react'
import { ListFormat } from 'typescript';


  

export default function Players() {
    type User = {
        id?: number;
        name: string;
      }

    const charlie : User = {name: "Charlie"};
    const pierre : User = {name: "Pierre"};
    const simon : User = {name: "Simon"};

    var players : User[] = [
        pierre, charlie, simon
    ];
    players.sort( function (a,b) {
        return a.name.localeCompare(b.name);});
    
    return (
        <div>
            <ul>
            {
                players.map((player) => <li>{player.name}</li>)
            }
            </ul>

        </div>
    )
}
