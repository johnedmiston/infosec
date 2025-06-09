function validateForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryUrl = urlParams.get('q');
    // Remove any surrounding quotes from the search term
    return queryUrl ? queryUrl.replace(/^"|"$/g, '') : '';
}

var keyword = validateForm();
console.log("Keyword: " + keyword);

// Check if keyword is "ALL" and update sort dropdown accordingly
if (keyword === "ALL") {
    document.addEventListener('DOMContentLoaded', function() {
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            // Clear existing options
            sortSelect.innerHTML = '';
            
            // Add new ID-based sorting options
            const idAscOption = document.createElement('option');
            idAscOption.value = 'id-asc';
            idAscOption.textContent = 'ID (ascending)';
            idAscOption.selected = true;
            
            const idDescOption = document.createElement('option');
            idDescOption.value = 'id-desc';
            idDescOption.textContent = 'ID (descending)';
            
            sortSelect.appendChild(idAscOption);
            sortSelect.appendChild(idDescOption);
            
            // Keep the date options
            const dateAscOption = document.createElement('option');
            dateAscOption.value = 'date-asc';
            dateAscOption.textContent = 'Date (oldest to newest)';
            
            const dateDescOption = document.createElement('option');
            dateDescOption.value = 'date-desc';
            dateDescOption.textContent = 'Date (newest to oldest)';
            
            sortSelect.appendChild(dateAscOption);
            sortSelect.appendChild(dateDescOption);
        }
    });
}

document.title = keyword + " - Information Security Links";

// Function to parse date strings into Date objects
function parseArticleDate(dateString) {
    if (!dateString) return new Date(0); // Handle null/undefined dates
    
    // Handle various date formats
    try {
        // For year-only format like "2025"
        if (/^\d{4}$/.test(dateString)) {
            return new Date(parseInt(dateString), 0, 1);
        }

        // Handle "Month DD, YYYY" format
        return new Date(dateString);
    } catch (e) {
        console.error("Error parsing date:", dateString);
        return new Date(0); // Return epoch date as fallback
    }
}

// Function to count occurrences of a keyword in a string
function countOccurrences(str, keyword) {
    if (!str) return 0;
    const regex = new RegExp(keyword, 'gi');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Function to find and sort articles
function findArticles(findKeyword, sortMethod = 'relevance') {
    // Initialize results array OUTSIDE the loop
    var articleResults = [];
    
    // Check if keyword is "ALL" - if so, return all articles
    if (findKeyword === "ALL") {
        // Get all articles
        var maxId = Math.max(...article.map(o => o.id));
        for (var i = 0; i <= maxId; i++) {
            const currentArticle = article.find(a => a.id === i);
            if (currentArticle) {
                articleResults.push({
                    id: currentArticle.id,
                    link: currentArticle.link,
                    title: currentArticle.title || '',
                    description: currentArticle.description || '',
                    date: currentArticle.date,
                    author: currentArticle.author,
                    count: 0 // Not relevant for ALL search
                });
            }
        }
    } else {
        // Original search logic for specific keywords
        var maxId = Math.max(...article.map(o => o.id));
        for (var i = 0; i <= maxId; i++) {
            const currentArticle = article.find(a => a.id === i);
            if (currentArticle) {
                const title = currentArticle.title || '';
                const description = currentArticle.description || '';
                
                // Count occurrences in title and description
                const titleCount = countOccurrences(title, findKeyword);
                const descriptionCount = countOccurrences(description, findKeyword);
                const totalCount = titleCount + descriptionCount;
                
                // Only add articles that contain the keyword at least once
                if (totalCount > 0) {
                    articleResults.push({
                        id: currentArticle.id,
                        link: currentArticle.link,
                        title: title,
                        description: description,
                        date: currentArticle.date,
                        author: currentArticle.author,
                        count: totalCount
                    });
                }
            }
        }
    }
    
    // Sort based on selected method
    switch(sortMethod) {
        case 'id-asc':
            // Sort by ID in ascending order
            articleResults.sort((a, b) => a.id - b.id);
            break;
        case 'id-desc':
            // Sort by ID in descending order
            articleResults.sort((a, b) => b.id - a.id);
            break;
        case 'date-asc':
            // Sort by date in ascending order (oldest first)
            articleResults.sort((a, b) => {
                const dateA = parseArticleDate(a.date);
                const dateB = parseArticleDate(b.date);
                return dateA - dateB;
            });
            break;
        case 'date-desc':
            // Sort by date in descending order (newest first)
            articleResults.sort((a, b) => {
                const dateA = parseArticleDate(a.date);
                const dateB = parseArticleDate(b.date);
                return dateB - dateA;
            });
            break;
        case 'relevance':
        default:
            // Sort by count in descending order (default)
            articleResults.sort((a, b) => b.count - a.count);
            break;
    }
    
    return articleResults;
}

// Display search results with the given sorting method
function displaySearchResults(sortMethod = 'relevance') {
    // For "ALL" search, default to id-asc if relevance is selected
    if (keyword === "ALL" && sortMethod === 'relevance') {
        sortMethod = 'id-asc';
        console.log('Displaying every article');
    }
    
    // Execute the function and store the result
    const foundArticles = findArticles(keyword, sortMethod);
    
    // Update sort indicator in the heading
    let sortIndicator = "";
    switch(sortMethod) {
        case 'id-asc':
            sortIndicator = " (Sorted by ID: ascending)";
            break;
        case 'id-desc':
            sortIndicator = " (Sorted by ID: descending)";
            break;
        case 'date-asc':
            sortIndicator = " (Sorted by date: oldest first)";
            break;
        case 'date-desc':
            sortIndicator = " (Sorted by date: newest first)";
            break;
        default:
            sortIndicator = " (Sorted by relevance)";
            break;
    }
    
    // Update the heading based on whether it's an "ALL" search
    if (keyword === "ALL") {
        document.getElementById("search-verify").innerHTML = "<h1>All Articles</h1>";
    } else {
        document.getElementById("search-verify").innerHTML = "<h1>Search Results For: " + keyword + "</h1>";
    }
    
    // Clear previous results
    $("#searchContainer").empty();
    
    // Optional: Display the result in console
    console.log(foundArticles);

    // Check if no results were found
if (foundArticles.length === 0) {
    // Clear the search container
    $("#searchContainer").empty();
    
    // Create a no-results message
    const noResultsHTML = `
        <div class="no-results-container">
            <img class="zero-img" src="/img/zero-results.png" alt="There were no results found" />
            <h1>No results found</h1>
            <h3>We couldn't find any articles matching "<strong>${keyword}</strong>"</h3>
        </div>
    `;
    
    // Display the no-results message
    $("#searchContainer").html(noResultsHTML);
    
    // Exit the function early since there are no results to process
    return;
}
function isDateOlderThanCutoff(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const cutoffYear = currentYear - 7; // Set cutoff to 5 years ago
  const cutoffDate = new Date(cutoffYear, 0, 1); // January 1st of the current year

  return inputDate >= cutoffDate; // Return true if the input date is at least 8 years older than the cutoff
}

$.ajax({
    url: "/html/elements/cards.html",
    async: false,
    success: function(data) {
        $("#searchContainer").html(data);
        var template = $("#searchContainer").children();
        var originalTemplate = template.clone();
        
        // Clear the container to remove the template
        $("#searchContainer").empty();
        
        // Process articles
        for (var q = 0; q < foundArticles.length; q++) {
            var foundArticle = foundArticles[q];
            var originalArticle = article.find(item => item.id === foundArticle.id);
            if (originalArticle) {
                if (keyword === "ALL") {
                    if(sortIndicator === " (Sorted by ID: ascending)") {
                        console.log('Displaying article ID:' + originalArticle.id);
                    } else if (sortIndicator === " (Sorted by ID: descending)") {
                        console.log('Displaying article ID:' + originalArticle.id);
                    } else if (sortIndicator === " (Sorted by date: oldest first)") {
                        console.log('Displaying article with date: ' + originalArticle.date + ' (ID: ' + originalArticle.id + ')');
                    } else if (sortIndicator === " (Sorted by date: newest first)") {
                        console.log('Displaying article with date: ' + originalArticle.date + ' (ID: ' + originalArticle.id + ')');
                    };
                } else {
                    if(sortIndicator === " (Sorted by relevance)") {
                        console.log('Match found for Article:' + originalArticle.id + ', it has ' + foundArticle.count + ' of the keyword: ' + keyword);
                    } else if (sortIndicator === " (Sorted by date: oldest first)") {
                        console.log('Match found for article with date: ' + originalArticle.date + ' (ID: ' + originalArticle.id + ')');
                    } else if (sortIndicator === " (Sorted by date: newest first)") {
                        console.log('Match found for article with date: ' + originalArticle.date + ' (ID: ' + originalArticle.id + ')');
                    };
                };
                        
                // Create a new card for each found article
                var newCard = originalTemplate.clone();
                newCard.addClass("id" + originalArticle.id);
                $("#searchContainer").append(newCard);
                var articleObj = originalArticle;

                // IMMEDIATELY POPULATE THIS CARD
                newCard.find('#card-image').html('<img src="/img/articles/' + originalArticle.id + '.png" alt="' + articleObj.title + '">');
                newCard.find('#card-header').html('<h1>' + articleObj.title + '</h1>');
                newCard.find('#card-text').html('<p>' + articleObj.description + '</p>');
                newCard.find('#card-link').html('<a href="' + articleObj.link + '" target="_blank">Open Page</a>');
                newCard.find('#card-date').html('<p>' + articleObj.date + '</p>');
                newCard.find('#card-author').html('<p>' + articleObj.author + '</p>');

                // Add this line to display ID when search is "ALL"
                if (keyword === "ALL") {
                    if (!isDateOlderThanCutoff(originalArticle.date)){
                        newCard.find('#card-id').html('<h3>ID: ' + originalArticle.id + '</h3> <h3 class="h3-red">This article is older than 8 years and may not be relevant.</h3>');
                    } else{
                        newCard.find('#card-id').html('<h3>ID: ' + originalArticle.id + '</h3>');
                    }
                    
                    categoriesNewCard = "<h3>Categories:</h3>";
                    for (let i = 0; i < originalArticle.categories.length; i++) {
                        categoriesNewCard += '<h3 class="card-category">' + originalArticle.categories[i] + '</h3>';
                    };
                    newCard.find('#card-cat').html(categoriesNewCard);
                };
            };
        };
    }
});
}

document.addEventListener('DOMContentLoaded', function() {
    // Initial display with appropriate default sort
    const defaultSort = keyword === "ALL" ? 'id-asc' : 'relevance';
    displaySearchResults(defaultSort);
    
    // Add event listener for the sort dropdown
    document.querySelector('#sort-select').addEventListener('change', function() {
        const selectedSort = this.value;
        displaySearchResults(selectedSort);
    });
});
