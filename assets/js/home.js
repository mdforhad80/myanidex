async function loadTrending(){

    try{

        const container =
        document.getElementById("trending");

        const animeList = await fetch(
            "./data/anime.json"
        ).then(res=>res.json());

        for(const anime of animeList){

            const response = await fetch(
                `https://api.jikan.moe/v4/anime/${anime.mal_id}/full`
            );

            const json = await response.json();

            const item = json.data;

            container.innerHTML += `

            <a href="./anime.html?id=${item.mal_id}">

                <div class="anime-card">

                    <img
                        loading="lazy"
                        src="${item.images.webp.large_image_url}"
                        alt="${item.title}"
                    >

                    <div class="overlay">

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ⭐ ${item.score || "N/A"}
                            •
                            ${item.episodes || "?"} EP
                        </p>

                    </div>

                </div>

            </a>

            `;
        }

    }

    catch(error){

        console.error(error);

    }

}

loadTrending();
