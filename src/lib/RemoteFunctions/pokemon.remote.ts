import { query, getRequestEvent } from "$app/server";
import * as v from 'valibot'

const argsSchema = v.object({
    offset: v.number(),
    limit: v.number()
});

export const getPokemon = query(argsSchema, async ({ offset, limit }) => {

    const { fetch } = getRequestEvent();
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const pokemons = await response.json();
    console.log('get pokemon response:', pokemons.results);

    return {
        pokemons: pokemons.results
    };
})
