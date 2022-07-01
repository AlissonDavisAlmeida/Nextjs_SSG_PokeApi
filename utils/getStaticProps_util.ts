import { pokeAPI } from "../api";
import { Pokemon } from "../interfaces/pokemon_full";

export const getStaticPoke = async (params: string | string[]) => {

    try {

        const { data } = await pokeAPI.get<Pokemon>(`pokemon/${params}`)

        const pokemon = {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }

        return pokemon
    } catch (error) {
        return null
    }
}