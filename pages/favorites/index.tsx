import { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layouts";
import FavoritePokemons from "../../components/pokemon/favorites/FavoritePokemons";
import NoContent from "../../components/ui/NoContent";
import { pokemons } from "../../utils";

function FavoritesPage() {

    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])
    const isMounted = useRef(false)

    useEffect(() => {
      
      setfavoritePokemons(pokemons())

    }, [])


    return (
        <Layout title="Pokemon Favorites">

            {favoritePokemons.length === 0 && <NoContent />}
            {favoritePokemons.length > 0 && <FavoritePokemons favoritePokemons={favoritePokemons}/>}


        </Layout>

    );
}

export default FavoritesPage;