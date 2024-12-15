document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const password = document.getElementById("password");
    const errorNombre = document.getElementById("error-nombre");
    const errorPassword = document.getElementById("error-password");
    const submitButton = document.getElementById("submit");
    const limpiarButton = document.getElementById("limpiar");
  
    const validarNombre = () => {
      const nombreValor = nombre.value.trim();
      const regexNombre = /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/;
  
      if (nombreValor === "") {
        errorNombre.textContent = "Nombre obligatorio.";
        return false;
      }
      if (!regexNombre.test(nombreValor)) {
        errorNombre.textContent = "Nombre inválido.";
        return false;
      }
      if (nombreValor.length > 20) {
        errorNombre.textContent = "El nombre no puede tener más de 20 caracteres.";
        return false;
      }
      errorNombre.textContent = "";
      return true;
    };
  

    const validarPassword = () => {
      const passwordValor = password.value.trim();
      const regexPassword = /^[a-zA-Z0-9·$%&/()]{8,16}$/;
  
      if (passwordValor === "") {
        errorPassword.textContent = "La contraseña es obligatoria.";
        return false;
      }
      if (!regexPassword.test(passwordValor)) {
        errorPassword.textContent =
          "La contraseña debe tener entre 8 y 16 caracteres y solo puede contener letras, números y los caracteres ·$%&/().";
        return false;
      }
      errorPassword.textContent = "";
      return true;
    };
  

    limpiarButton.addEventListener("click", () => {
      nombre.value = "";
      password.value = "";
      errorNombre.textContent = "";
      errorPassword.textContent = "";
    });
  

    formulario.addEventListener("submit", (e) => {
      e.preventDefault(); 
  
      const nombreValido = validarNombre();
      const passwordValido = validarPassword();
  
      if (nombreValido && passwordValido) {
        window.location.href = "main.html";
      }
    });
  

  });