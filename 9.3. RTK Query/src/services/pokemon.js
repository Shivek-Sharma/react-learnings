import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in components, which are auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } = pokemonApi

// useGetPokemonByNameQuery -> To Query on mount
// useLazyGetPokemonByNameQuery -> To Query on demand