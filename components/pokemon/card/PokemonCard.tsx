import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Result } from "../../../interfaces/pokemon_list_interface,";

interface PokemonCardProps {
   pokemon: Result
}


function PokemonCard({pokemon} : PokemonCardProps) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }
    return ( 
        <Card isHoverable isPressable variant='bordered'  onClick={handleClick}>
              <Card.Body>
                <Card.Image

                  src={pokemon.img}
                  objectFit="cover"
                  width="100%"

                />
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='center'>

                  <Text transform='capitalize' weight="semibold" size={30}>
                    {pokemon.name}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
     );
}

export default PokemonCard;