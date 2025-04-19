document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-post");
    const tituloInput = document.getElementById("titulo");
    const resumenInput = document.getElementById("resumen");
    const contenidoInput = document.getElementById("contenido");
    const mensajeExito = document.getElementById("mensaje-exito");
  
    const maxTitulo = 50;
    const maxResumen = 150;
  
    // Función para bloquear al alcanzar el límite
    function limitarInput(input, max) {
      input.addEventListener("input", () => {
        if (input.value.length > max) {
          input.value = input.value.slice(0, max);
        }
      });
    }
  
    limitarInput(tituloInput, maxTitulo);
    limitarInput(resumenInput, maxResumen);
  
    // Guardar post
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const titulo = tituloInput.value.trim();
      const resumen = resumenInput.value.trim();
      const contenido = contenidoInput.value.trim();
  
      if (!titulo || !resumen || !contenido) {
        alert("Por favor, completá todos los campos.");
        return;
      }
  
      if (titulo.length > maxTitulo || resumen.length > maxResumen) {
        alert("Excediste el límite de caracteres en el título o resumen.");
        return;
      }
  
      const posts = JSON.parse(localStorage.getItem("posts")) || [];

      const nuevoPost = {
        id: Date.now(),
        titulo,
        resumen,
        contenido,
        categoria,
        fecha: new Date().toISOString()
      };
      
      posts.push(nuevoPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      
      // Mensaje de éxito
      mensajeExito.textContent = "✅ ¡Tu post ha sido guardado con éxito!";
      mensajeExito.style.display = "block";
  
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 4000);
  
      // Limpiar formulario
      form.reset();
    });
  });
  
  