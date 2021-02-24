
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

export interface VersionGroupDetails{
    level_learned_at: number,
    move_learn_method: {name: string, url: string}
    version_group: {name: string, url: string}
}

export interface Move {
    move: {name: string, url: string}
    version_group_details: VersionGroupDetails[]
}

export interface Stat{
    base_stat: number
    effort: number
    stat: {name: string, url: string}
}

// export interface Pokemon {
//     abilities: AbilityPokemon[],
//     base_experience: number,
//     forms: Form[],
//     game_indices: GameIndice[],
//     height: number,
//     held_items: HeldItem[]
//     id: number,
//     is_default: boolean,
//     location_area_encounters: string,
//     moves: Move[]
//     name: string
//     order: number
//     species: {name: string, url: string}
//     sprites: {back_default: string, back_female: null, back_shiny: string, back_shiny_female: null, front_default: string, front_female: null, front_shiny: string, 
//     front_shiny_female: null, other: {dream_world: {front_default: string, front_female: null}, official_artwork: {front_default: string}}},
//     stats: Stat[],
//     types: [{…}]
//     weight: 346
// }

// export interface jsonTypePokemon{
//     count: number
//     next: string
//     previous: null
//     results: Pokemon
// } 

