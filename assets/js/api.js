const API = "https://api.jikan.moe/v4";

async function fetchAnime(id){

    const res = await fetch(
        `${API}/anime/${id}/full`
    );

    return await res.json();
}

async function searchAnime(query){

    const res = await fetch(
        `${API}/anime?q=${query}`
    );

    return await res.json();
}
