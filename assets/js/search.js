const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", async ()=>{

    const q = input.value;

    if(q.length < 2) return;

    const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${q}`
    );

    const data = await res.json();

    results.innerHTML = "";

    data.data.forEach(anime=>{

        results.innerHTML += `

        <a href="anime.html?id=${anime.mal_id}">

            <div class="anime-card">

                <img src="${anime.images.webp.large_image_url}">

                <div class="overlay">
                    <h3>${anime.title}</h3>
                </div>

            </div>

        </a>

        `;
    });

});
