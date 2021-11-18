/* URL de la API */
const api_url = 'https://pokeapi.co/api/v2/pokemon/';

/* Escuchar elementos del html */
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getPokemon = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showPokemon(data);
        /*console.log(data);*/
    } catch {
        swal.fire({
            title: 'Algo fallo',
            text: 'Hubo un error en el servidor',
            icon: 'error'
        })
    }
    
    
}

for (let i = 1; i <= 50; i++) {
    getPokemon(api_url + i)
}

const showPokemon = (data) => {
    const { id, name, sprites, base_experience, types } = data;
    console.log(id, name, sprites, base_experience, types);

    const pokemonCard = document.createElement('div');

    pokemonCard.classList.add('movie');

    /*cualquier cosa, quita el h3 que tiene el id */
    pokemonCard.innerHTML = `
         <img src="${sprites.front_default}">
         <div class="movie-info">
            <h3>${id}</h3>
            <h3>${name}</h3>
            <span class="green">${base_experience}</span>
         </div>
         <div class="overview">
            <h3>${types[0].type.name}</h3>
         </div>
    `

    main.appendChild(pokemonCard);
}