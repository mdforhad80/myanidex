async function loadTrending(){

    const container =
    document.getElementById("trending");

    const animeList = await fetch(
        "data/anime.json"
    ).then(r=>r.json());

    for(const anime of animeList){

        const data = await fetch(
            `https://api.jikan.moe/v4/anime/${anime.mal_id}/full`
        ).then(r=>r.json());

        const item = data.data;

        container.innerHTML += `
        <a href="anime.html?id=${item.mal_id}">

            <div class="anime-card">

                <img src="${item.images.webp.large_image_url}">

                <div class="overlay">

                    <h3>${item.title}</h3>

                    <p>
                    ⭐ ${item.score || 'N/A'}
                    • ${item.episodes || '?'} EP
                    </p>

                </div>

            </div>

        </a>
        `;
    }
}

loadTrending();
