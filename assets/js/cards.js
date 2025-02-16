async function fetchData() {
    try {
        const response = await fetch('../assets/JSON/file.json');
        const data = await response.json();

        // Obtém a categoria da página a partir do nome do arquivo
        const category = getCategoryFromURL();

        if (category) {
            createCards(data, category);
        } else {
            console.error("Categoria não encontrada para esta página.");
        }
    } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
    }
}

// Função para determinar a categoria com base no nome do arquivo HTML
function getCategoryFromURL() {
    const path = window.location.pathname; // Obtém a URL da página
    const page = path.split("/").pop().replace(".html", ""); // Pega o nome do arquivo sem ".html"

    // Mapeia o nome das páginas para as categorias do JSON
    const categoryMap = {
        "backups": "Backups",
        "cybercrimes": "Cybercrimes",
        "encryption": "Encryption",
        "fundamentals": "Fundamentals",
        "miscellaneous": "Miscellaneous",
        "password": "Password",
        "security": "Security",
        "phone-security": "Phone Security",
        "security-systems": "Securing Operating System",
        "securing-hardware": "Securing Hardware"
    };

    return categoryMap[page] || null;
}

// Função para criar os cards dinamicamente
function createCards(data, category) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = ''; // Limpa o container antes de adicionar os novos cards

    // Obter as subcategorias da categoria escolhida (ex: "Backups")
    const categoryData = data[category];

    if (categoryData) {
        categoryData.forEach(section => {

            // Criar a section para a subcategoria
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('subcategory-section');

            // Criar título da subcategoria (h2)
            const subcategoryTitle = document.createElement('h2');
            subcategoryTitle.textContent = section.title;
            sectionElement.appendChild(subcategoryTitle);

            // Criar container para os cards da subcategoria
            const subcategoryContainer = document.createElement('div');
            subcategoryContainer.classList.add('subcategory-container');

            section.subcategories.forEach(subcategory => {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = subcategory.image || '../assets/images/logo.png';
                img.alt = subcategory.title;

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const title = document.createElement('h3');
                title.textContent = subcategory.title;

                const description = document.createElement('p');
                description.textContent = subcategory.description || 'No description available.';

                const link = document.createElement('a');
                link.href = subcategory.link;
                link.textContent = 'Learn more';
                link.target = '_blank';
                
                // Montando estrutura do card
                cardContent.appendChild(title);
                cardContent.appendChild(description);
                cardContent.appendChild(link);

                card.appendChild(img);
                card.appendChild(cardContent);

                subcategoryContainer.appendChild(card);
            });

            // Adiciona os elementos à section
            sectionElement.appendChild(subcategoryContainer);

            // Adiciona a section ao container principal
            container.appendChild(sectionElement);
        });
    } else {
        container.innerHTML = `<p>No data available for this category.</p>`;
    }
}

// Quando a página carregar, chama a função para buscar os dados e gerar os cards
window.addEventListener('DOMContentLoaded', fetchData);
