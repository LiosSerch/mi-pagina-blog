document.addEventListener("DOMContentLoaded", () => {
    fetch("posts.json")
      .then(response => response.json())
      .then(data => {
        mostrarPosts(data);
      })
      .catch(error => {
        console.error("Error al cargar los posts:", error);
      });
  });
  
  function mostrarPosts(posts) {
    const contenedor = document.getElementById("post-list");
  
    posts.forEach(post => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("post");
  
      tarjeta.innerHTML = `
        <h2>${post.titulo}</h2>
        <p>${post.resumen}</p>
        <a href="posts.html?id=${post.id}">Leer más</a>
      `;
  
      contenedor.appendChild(tarjeta);
    });
  }
  