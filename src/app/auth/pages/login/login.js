function toggleMostrarContrasena() {
  var contrasenaInput = document.getElementById("contrasenaInput");
  var mostrarContrasenaBtn = document.getElementById("mostrarContrasenaBtn");

  // Si el tipo de entrada es "password", cambia a "text"; de lo contrario, cambia a "password"
  if (contrasenaInput.type === "password") {
      contrasenaInput.type = "text";
      mostrarContrasenaBtn.textContent = "Ocultar Contraseña";
  } else {
      contrasenaInput.type = "password";
      mostrarContrasenaBtn.textContent = "Mostrar Contraseña";
  }
}
