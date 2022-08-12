import axios from 'axios';


export class pokeApiAdapter {

    private readonly axios = axios

    async get(url: string) {
        const { data } = await this.axios.get(url)
        return data
    }

}