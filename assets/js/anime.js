const params = new URLSearchParams(location.search);

const malId = params.get("id");

async function loadAnime(){

    const anime = await fetch(
        `https://api.jikan.moe/v4/anime/${malId}/full`
    ).then(r=>r.json());

    const data = anime.data;

    document.getElementById("animeDetails").innerHTML = `

    <div class="anime-banner">

        <img src="${data.images.webp.large_image_url}">

        <h1>${data.title}</h1>

        <p>${data.synopsis}</p>

        <p>Episodes: ${data.episodes}</p>

        <p>Score: ${data.score}</p>

        <p>Status: ${data.status}</p>

    </div>

    `;

    generateEpisodes(data.episodes || 12);
}

function generateEpisodes(total){

    const container =
    document.getElementById("episodes");

    for(let i=1;i<=total;i++){

        container.innerHTML += `

        <a href="watch.html?id=${malId}&ep=${i}&type=sub">
            <button class="episode-btn">
                EP ${i}
            </button>
        </a>

        `;
    }
}

loadAnime();
