const params = new URLSearchParams(window.location.search);

const id = params.get("id");
const ep = params.get("ep");

const player = document.getElementById("video-player");

player.src =
`https://megaplay.buzz/stream/mal/${id}/${ep}/sub`;

async function loadEpisodes(){

    const response = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/full`
    );

    const data = await response.json();

    const anime = data.data;

    let html = "";

    for(let i=1;i<=anime.episodes;i++){

        html += `
            <a class="ep-btn"
            href="?id=${id}&ep=${i}">
            Episode ${i}
            </a>
        `;
    }

    document.getElementById("episode-list").innerHTML = html;
}

loadEpisodes();
