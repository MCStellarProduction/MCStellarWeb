<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuración del correo
    $to = "pandagamer7553@outlook.com"; // Cambia por tu correo personalizado
    $subject = "Nuevo Registro en Stellar Client";

    // Datos recibidos del formulario
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Cuerpo del correo
    $body = "Nuevo usuario registrado:\n\n";
    $body .= "Nombre de Usuario: $username\n";
    $body .= "Correo Electrónico: $email\n";
    $body .= "Contraseña: $password\n"; // No es recomendable enviar contraseñas en texto plano

    // Encabezados
    $headers = "From: no-reply@stellarclient.com\r\n"; // Cambia el dominio si es necesario
    $headers .= "Reply-To: $email\r\n";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Registro completado exitosamente. Nos pondremos en contacto pronto.";
    } else {
        echo "Hubo un error al procesar tu registro. Intenta nuevamente.";
    }
} else {
    echo "Método no permitido.";
}
?>
