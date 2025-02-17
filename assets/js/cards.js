// Function to limit the text to a certain number of characters
function limitText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "..."; // Cut the text and add "..."
    }
    return text;
}

async function fetchData() {
    try {
        // Fetch the JSON file asynchronously
        const response = await fetch('../assets/JSON/file.json');
        const data = await response.json();
        const category = getCategoryFromURL();  // Get the category based on the current page URL

        if (category) {
            createCards(data, category); // Generate cards dynamically
        } else {
            console.error("⚠️ Category not found for this page or category data is missing.");
        }
    } catch (error) {
        console.error("❌ Error loading the JSON file:", error);
    }
}

// Function to determine the category based on the HTML file name
function getCategoryFromURL() {
    const path = window.location.pathname; // Get the current page URL
    const page = path.split("/").pop().replace(".html", ""); // Extract file name without ".html"

    // Map page names to JSON categories
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

    const category = categoryMap[page] || null;

    return category;
}

// Function to dynamically create cards based on JSON data
function createCards(data, category) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = ''; // Clear the container before adding new cards

    // Retrieve the data for the selected category (e.g., "Fundamentals")
    const categoryData = data[category];

    if (categoryData) {
        categoryData.forEach(section => {
            // Create a section for each subcategory
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('subcategory-section');

            // Create subcategory title (h2)
            const subcategoryTitle = document.createElement('h2');
            subcategoryTitle.textContent = section.title;
            sectionElement.appendChild(subcategoryTitle);

            // Create a container for subcategory cards
            const subcategoryContainer = document.createElement('div');
            subcategoryContainer.classList.add('subcategory-container');

            section.subcategories.forEach(subcategory => {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = subcategory.img && subcategory.img.trim() !== "" ? subcategory.img : '../assets/images/logo.png';

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                // Limit title to 80 characters
                const title = document.createElement('h3');
                title.textContent = limitText(subcategory.title, 50);  // Apply the limitText function

                // Limit description to 100 characters
                const description = document.createElement('p');
                description.textContent = subcategory.description && subcategory.description.trim() !== ""
                    ? limitText(subcategory.description, 70)  // Apply the limitText function
                    : 'No description available.';

                const link = document.createElement('a');
                link.href = subcategory.link;
                link.textContent = 'Learn more';
                link.target = '_blank';

                // Assemble the card structure
                cardContent.appendChild(title);
                cardContent.appendChild(description);
                cardContent.appendChild(link);

                card.appendChild(img);
                card.appendChild(cardContent);

                subcategoryContainer.appendChild(card);
            });

            // Add elements to the section
            sectionElement.appendChild(subcategoryContainer);

            // Append the section to the main container
            container.appendChild(sectionElement);
        });
    } else {
        container.innerHTML = `<p>No data available for this category.</p>`;
        console.error("No data found for category:", category);
    }
}

// When the page loads, fetch the data and generate the cards
window.addEventListener('DOMContentLoaded', fetchData);
