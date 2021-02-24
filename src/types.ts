
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

export interface PokemonUrl {
    name: string,
    url: string
}

export interface jsonTypePokemons{
    count: number
    next: string
    previous: null
    results: PokemonUrl[]
} 

export interface Ability {
    name: string,
    url: string
}

export interface AbilityPokemon {
    ability: Ability, 
    is_hidden: boolean,
    slot: number
}

export interface Form{
    name: string, url: string
}

export interface Version {
    name: string, url: string
}

export interface GameIndice{
    game_index: number, version: Version
}

export interface VersionDetails {
    rarity: number, version: Version
}

export interface Item {
    name: string, url: string
}

export interface HeldItem {
    item: Item,
    version_details: VersionDetails[]
}

export interface Pokemon {
    abilities: AbilityPokemon[],
    base_experience: number,
    forms: Form[],
    game_indices: GameIndice[],
    height: number,
    held_items: HeldItem[]
    id: 113
    is_default: true
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/113/encounters"
    moves: (121) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
    name: "chansey"
    order: 170
    species: {name: "chansey", url: "https://pokeapi.co/api/v2/pokemon-species/113/"}
    sprites: {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png", back_female: null, back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/113.png", back_shiny_female: null, front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png", …}
    stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    types: [{…}]
    weight: 346
}

export interface jsonTypePokemon{
    count: number
    next: string
    previous: null
    results: Pokemon
} 

