import { Grid } from "@nextui-org/react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
    favoritePokemons: number[]
}

function FavoritePokemons({ favoritePokemons }: Props) {
    return (
        <>

            {

                <Grid.Container gap={2} direction="row" justify="flex-start">
                    {
                        favoritePokemons.map(id => (
                            <FavoriteCardPokemon key={id} pokemonId={id} />
                        ))
                    }
                </Grid.Container>
            }
        </>
    );
}

export default FavoritePokemons;