
const toogleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}


const existsPokemonInFavorites = (id: number): boolean => {

    if (typeof localStorage === 'undefined') { return false }

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export {
    pokemons,
    toogleFavorite,
    existsPokemonInFavorites
}