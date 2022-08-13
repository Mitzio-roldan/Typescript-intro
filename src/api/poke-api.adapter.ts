import axios from 'axios';

export interface HttpAdapter{
    get<T>(url : string): Promise<T>
}



export class PokeApiFetch implements HttpAdapter{

    async get<T>(url: string):Promise<T> {
        const resp = await fetch(url)
        const data: T = await resp.json()
        return data

    }
}


export class pokeApiAdapter implements HttpAdapter{

    private readonly axios = axios

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url)
        return data
    }

}