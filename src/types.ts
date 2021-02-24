
export interface PageLinkProps {
    link: string,
    text: string
}

export interface User {
  id: number;
  name: string;
}

export interface Player {
    user: User;
    wins: number;
}


export interface Match {
  id: number,
  idPlayer1: number,
  idPlayer2 ?: number,
  pokemonsPlayer1 ?: Array<String>,
  pokemonsPlayer2 ?: Array<String>,
  status : string,
  winner ?: number,
  rounds : Round[]
}

export interface MatchUpdateInput {
  idPlayer2 ?: number,
  pokemonsPlayer1 ?: Array<String>,
  pokemonsPlayer2 ?: Array<String>,
  status ?: string
}

export interface RoundUpdateInput {
  matchId: number,
  roundNumber: 1 | 2 | 3 | 4 | 5 | 6,
  pokemonPlayer1 ?: string,
  pokemonPlayer2 ?: string,
  status ?: string  
}

export interface Round {
  matchId: number,
  roundNumber: 1 | 2 | 3 | 4 | 5 | 6,
  pokemonPlayer1 : string,
  pokemonPlayer2 : string,
  status : "STARTED" | "FINISHED",
  winner: string
}

