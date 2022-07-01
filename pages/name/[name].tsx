import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";

import confetti from "canvas-confetti"
import { Pokemon } from "../../interfaces/pokemon_full";
import { existsPokemonInFavorites, toogleFavorite } from "../../utils";
import { Layout } from "../../components/layouts";
import { pokeAPI } from "../../api";
import { PokemonListResponse } from "../../interfaces/pokemon_list_interface,";
import { getStaticPoke } from "../../utils/getStaticProps_util";

interface Props {
    pokemon?: Pokemon

}

const PokemonNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorite, setisInFavorite] = useState(existsPokemonInFavorites(pokemon?.id!));

    const onSaveOrRemoveInFavorites = () => {
        toogleFavorite(pokemon?.id!)
        setisInFavorite(!isInFavorite);

        !isInFavorite && confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })

    }


    return (
        <Layout title={pokemon?.name}>
            <Grid.Container css={{
                margin: "5px"
            }}
                gap={2}
            >
                <Grid xs={12} sm={6} md={6}>
                    <Card isHoverable css={{ padding: "30px" }}>
                        <Card.Body >
                            <Card.Image src={pokemon?.sprites.other?.dream_world.front_default || ""}
                                objectFit="cover"
                                width="100%"
                                alt={"pokemon"}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={6} >
                    <Card css={{ padding: "20px" }}>


                        <Card.Header css={{ display: "flex", justifyContent: "space-between", "@mdMax": { flexDirection: "column" } }}>
                            <Text h1 transform="capitalize">{pokemon?.name}</Text>
                            <Button

                                color={"gradient"}
                                ghost={!isInFavorite}
                                onPress={onSaveOrRemoveInFavorites}
                            >
                                {isInFavorite ? "Remove from favorites" : "Save in favorites"}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image
                                    src={pokemon?.sprites.front_default || ""}
                                    alt={pokemon?.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon?.sprites.back_default || ""}
                                    alt={pokemon?.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon?.sprites.front_shiny || ""}
                                    alt={pokemon?.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon?.sprites.back_shiny || ""}
                                    alt={pokemon?.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>

                </Grid>

            </Grid.Container>

        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeAPI.get<PokemonListResponse>("/pokemon?limit=151");
    const pokemon151: string[] = data.results.map((poke) => poke.name)
    return {
        paths: [
            ...pokemon151.map((name) => ({ params: { name } }))
        ],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

   const pokemon = await getStaticPoke(context.params?.name!);

    if(!pokemon) {
        return{
            redirect:{
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400
    }
}



export default PokemonNamePage;