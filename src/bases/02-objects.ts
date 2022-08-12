import { age } from './01-types';
export const ids = [1, 2, 3, 4, 5, age]

interface Pokemon {
    id: number,
    nombre: string | number,
    age?: number
}

export const pokemon1: Pokemon = {
    id: 1,
    nombre: "Charmander",
    age:1
}

export const pokemon2: Pokemon = {
    id: 2,
    nombre: "Bulbasaur",
    age:1
}

export const pockemons: Pokemon[] = []

pockemons.push(pokemon1, pokemon2)

console.log(pockemons);

