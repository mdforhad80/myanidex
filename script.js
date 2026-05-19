async function loadAnime() {
  const res = await fetch('anime.json');
  const anime = await res.json();

  const container = document.getElementById('anime-list');

  anime.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.title}</h3>
      </div>
    `;
  });
}

loadAnime();
