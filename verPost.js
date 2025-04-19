document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    if (!id) {
      document.getElementById("post").innerHTML = "<p>Post no encontrado.</p>";
      return;
    }
  
    fetch("posts.json")
      .then(response => response.json())
      .then(data => {
        const post = data.find(p => p.id == id);
  
        if (!post) {
          document.getElementById("post").innerHTML = "<p>Post no encontrado.</p>";
          return;
        }
  
        document.getElementById("post").innerHTML = `
          <h1>${post.titulo}</h1>
          <p>${post.contenido}</p>
        `;
      })
      .catch(error => {
        console.error("Error al cargar el post:", error);
      });
  });
  