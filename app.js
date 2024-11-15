// app.js
document.getElementById("login-btn").addEventListener("click", login);

function login() {
  // Obtén el valor de los campos
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Referencia al mensaje de error
  const errorMessage = document.getElementById("error-message");

  // Verifica que los campos no estén vacíos
  if (!email || !password) {
    errorMessage.textContent = "Por favor, complete todos los campos.";
    errorMessage.style.display = "block";
    return;
  }

  // Intenta iniciar sesión con Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Si el login es exitoso, redirige a la página custom
      window.location.href = "account_settings.html"; // Cambia la URL a la página que quieras
    })
    .catch((error) => {
      // Manejo de errores
      const errorCode = error.code;
      const errorMessage = error.message;

      // Muestra el mensaje de error correspondiente
      if (errorCode === 'auth/user-not-found') {
        // Si el correo no existe
        document.getElementById("error-message").textContent = "Account Doesn't exist!!";
      } else if (errorCode === 'auth/wrong-password') {
        // Si la contraseña es incorrecta
        document.getElementById("error-message").textContent = "Password or Email Address Incorrect";
      } else {
        // En caso de otros errores
        document.getElementById("error-message").textContent = "Error: " + errorMessage;
      }
      document.getElementById("error-message").style.display = "block";
    });
}
