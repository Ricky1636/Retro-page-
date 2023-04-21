// Función que devuelve un array de objetos que representan videojuegos retro.
function getRetroGames() {
    return [
      {
        title: "Super Mario Bros.",
        description: "Un clásico juego de plataformas desarrollado por Nintendo en 1985.",
        image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg"
      },
      {
        title: "The Legend of Zelda",
        description: "Un juego de acción-aventura creado por Nintendo en 1986.",
        image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/02/569022-legend-zelda-analisis-retro.jpg?itok=K71UKzQc"
      },
      {
        title: "Sonic the Hedgehog",
        description: "Un juego de plataformas rápido lanzado por Sega en 1991.",
        image: "https://retrocdn.net/images/6/6f/Sonic1_title.png"
      },
    ];
}

// Función que se ejecuta cuando el documento está listo.
$(document).ready(function() {
    // Obtiene la lista de videojuegos retro.
    let games = getRetroGames();

    // Itera sobre cada videojuego en la lista.
    for (let game of games) {
        // Crea una clase CSS con el nombre del videojuego en minúsculas y sin espacios.
        let gameImageClass = game.title.toLowerCase().replace(/\s+/g, '-');

        // Crea una tarjeta de Bootstrap para cada videojuego.
        let gameCard = `<div class="col-md-3">
                            <div class="card game-card">
                                <div class="card-img-container">
                                    <img src="${game.image}" class="card-img-top ${gameImageClass}" alt="${game.title}">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${game.title}</h5>
                                    <p class="card-text">${game.description}</p>
                                </div>
                            </div>
                        </div>`;

        // Añade la tarjeta del videojuego al contenedor de la lista de videojuegos.
        $("#game-list").append(gameCard);
    }
});
