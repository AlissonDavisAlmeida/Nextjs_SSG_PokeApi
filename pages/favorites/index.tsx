import { useEffect } from "react";
import { Layout } from "../../components/layouts";

function FavoritesPage() {

    useEffect(() => {
        const storage = localStorage
        console.log(storage)
    }, [])

    return ( 
        <Layout title="Pokemon Favorites">

            <h1>Favorites</h1>
        </Layout>
        
     );
}

export default FavoritesPage;