const params = new URLSearchParams(location.search);

const malId = params.get("id");
const ep = params.get("ep") || 1;
const type = params.get("type") || "sub";

const player = document.getElementById("player");

player.src =
`https://megaplay.buzz/stream/mal/${malId}/${ep}/${type}`;

localStorage.setItem(
    "continueWatching",
    JSON.stringify({
        malId,
        episode: ep,
        type
    })
);
