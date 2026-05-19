const container = document.getElementById("anime-list");

async function loadAnime() {

    const res = await fetch("data/anime.json");
    const animeList = await res.json();

    animeList.forEach(async item => {

        const response = await fetch(
            `https://api.jikan.moe/v4/anime/${item.mal_id}/full`
        );

        const data = await response.json();
        const anime = data.data;

        container.innerHTML += `
            <a href="anime.html?id=${anime.mal_id}">
                <div class="card">

                    <img src="${anime.images.jpg.large_image_url}">

                    <div class="card-content">

                        <h3>${anime.title}</h3>

                        <div class="meta">
                            ${anime.type} • ${anime.episodes || "?"} EP
                        </div>

                    </div>

                </div>
            </a>
        `;
    });
}

loadAnime();
