class NewPokemon {
    constructor(public readonly id: number,
        public name: string) { }

    scream() {
        console.log('NO QUIERO');
    }


    speak() {
        console.log(`NO QUIERO HABLAR!!!!!`);

    }

}


const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon
    }
}




@MyDecorator()
export class Pokemon {
    constructor(public readonly id: number,
        public name: string) { }

    scream() {
        console.log(this.name.toUpperCase());
    }


    speak() {
        console.log(`${this.name}!!!!!`);

    }

}
export const charmander = new Pokemon(1, "Charmander")
charmander.scream()
charmander.speak()