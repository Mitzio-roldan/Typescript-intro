
import { pokeApiAdapter } from '../api/poke-api.adapter';

export class Pokemon {

    get imagenUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }
    constructor(public readonly id: number,
        public name: string,
        private readonly http: pokeApiAdapter
        ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}`);
        this.speak()
    }

    private speak() {
        console.log(`${this.id}, ${this.name}`);

    }
    async moves() {
        const moves = await this.http.get('https://pokeapi.co/api/v2/pokemon/4')
        console.log(moves.data);
    }

}
const pokeApi = new pokeApiAdapter()
export const charmander = new Pokemon(1, 'Charmander', pokeApi)

// readonly no se puede modificar la propiedad
// ---------
// charmander.id = 200
//--------
charmander.name = 'Pedro'

console.log(charmander.imagenUrl);

console.log(charmander.scream());

charmander.moves()


