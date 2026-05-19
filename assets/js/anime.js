const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadAnime() {

    const response = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/full`
    );

    const data = await response.json();
    const anime = data.data;

    let episodesHTML = "";

    for(let i=1;i<=anime.episodes;i++){

        episodesHTML += `
            <a class="ep-btn"
               href="watch.html?id=${id}&ep=${i}&type=sub">
               Episode ${i}
            </a>
        `;
    }

    document.getElementById("anime-details").innerHTML = `
    
    <div class="watch-container">

        <div class="player">

            <img 
            src="${anime.images.jpg.large_image_url}"
            style="width:100%;border-radius:10px;"
            >

            <h1>${anime.title}</h1>

            <p>${anime.synopsis}</p>

            <br>

            <p>
            ${anime.type} |
            ${anime.status} |
            ⭐ ${anime.score}
            </p>

        </div>

        <div class="episodes">
            ${episodesHTML}
        </div>

    </div>
    `;
}

loadAnime();
