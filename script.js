document.addEventListener("DOMContentLoaded", function() {
    const acrostic1 = document.getElementById('acrostic1');
    const acrostic2 = document.getElementById('acrostic2');
    let currentAcrostic = 1;

    function showAcrostic(acrostic) {
        // Oculta el acróstico actual y elimina la clase activa del otro
        if (acrostic === 1) {
            acrostic1.classList.add('active');
            acrostic2.classList.remove('active');
            resetAnimation(acrostic1);
        } else {
            acrostic1.classList.remove('active');
            acrostic2.classList.add('active');
            resetAnimation(acrostic2);
        }
    }

    function animateAcrostic(acrostic) {
        const letterGroups = acrostic.querySelectorAll(".letter-group");
        letterGroups.forEach((group, index) => {
            setTimeout(() => {
                group.style.opacity = "1";
                group.style.transform = "translateY(0)";
            }, index * 3000); // Ajusta el tiempo entre cada grupo
        });

        const letters = acrostic.querySelectorAll(".letter");
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = "translateY(0)";
                letter.style.opacity = "1";
            }, index * 100); // Ajusta el tiempo entre letras dentro de cada grupo
        });
    }

    function resetAnimation(acrostic) {
        // Restablece las propiedades de animación a sus valores iniciales
        const letterGroups = acrostic.querySelectorAll(".letter-group");
        letterGroups.forEach(group => {
            group.style.opacity = "0";
            group.style.transform = "translateY(20px)";
        });

        const letters = acrostic.querySelectorAll(".letter");
        letters.forEach(letter => {
            letter.style.transform = "translateY(20px)";
            letter.style.opacity = "0";
        });

        // Vuelve a animar el acróstico después de un pequeño retraso
        setTimeout(() => animateAcrostic(acrostic), 100); // Ajusta el retraso antes de volver a animar
    }

    // Función para cerrar el mensaje flotante
    function closeMessage() {
        document.getElementById('floating-message').style.display = 'none';
        document.getElementById('acrostic-container').style.display = 'block';
        document.getElementById('background-music').play();
    }

    // Configura el evento click en el botón de cierre
    document.querySelector('.close-btn').addEventListener('click', closeMessage);

    // Configura el evento click en el botón de inicio
    document.getElementById('start-button').addEventListener('click', closeMessage);

    // Ocultar el mensaje después de un tiempo (por ejemplo, 10 segundos) si no se cierra manualmente
    setTimeout(closeMessage, 20000);

    // Inicialmente mostrar el primer acróstico
    showAcrostic(currentAcrostic);

    // Bucle entre acrósticos cada 15 segundos
    setInterval(() => {
        currentAcrostic = currentAcrostic === 1 ? 2 : 1;
        showAcrostic(currentAcrostic);
    }, 15000); // Cambia de acróstico cada 15 segundos
});
