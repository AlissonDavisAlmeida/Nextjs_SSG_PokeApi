import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokemonId: number
}

function FavoriteCardPokemon({ pokemonId }: Props) {

    const router = useRouter()

    const onFavoriteClick = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClick}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} />
            </Card>
        </Grid>
    );
}

export default FavoriteCardPokemon;