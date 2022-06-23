import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layouts';
import { pokeAPI } from '../api';
import { PokemonListResponse, Result as Pokemons } from '../interfaces/pokemon_list_interface,';
import { Grid } from '@nextui-org/react';
import PokemonCard from '../components/pokemon/card/PokemonCard';


interface HomeProps {
  pokemons: Pokemons[]
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <Layout title='Home Page'>

      <Grid.Container gap={2} justify="flex-start" >
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.name} xs={4} sm={3} md={2} xl={1}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>



  )
}



export const getStaticProps: GetStaticProps = async (context) => {

  const { data } = await pokeAPI.get<PokemonListResponse>("pokemon?limit=151")

  const pokemons: Pokemons[] = data.results.map((pokemon, index) => ({
    name: pokemon.name,
    url: pokemon.url,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))

  return {
    props: {
      pokemons
    },

  }
}

export default Home
