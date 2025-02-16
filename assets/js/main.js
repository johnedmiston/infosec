document.addEventListener("DOMContentLoaded", function () {
    // Carregar Header e Footer
    fetch("../assets/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Esperar o DOM atualizar antes de adicionar o event listener
            setTimeout(() => {
                const menuToggle = document.querySelector(".menu-toggle");
                const navLinks = document.querySelector(".nav-links");

                if (menuToggle && navLinks) {
                    menuToggle.addEventListener("click", function () {
                        navLinks.classList.toggle("active");
                    });
                } else {
                    console.error("Erro: Elementos .menu-toggle ou .nav-links não encontrados.");
                }
            }, 100);
        });

    fetch("../assets/components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
