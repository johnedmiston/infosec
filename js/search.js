function validateForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryUrl = urlParams.get('q');
    // Remove any surrounding quotes from the search term
    return queryUrl ? queryUrl.replace(/^"|"$/g, '') : '';
}

var keyword = validateForm();
console.log("Keyword: " + keyword);

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
    
    // Iterate through all articles
    var maxId = Math.max(...article.map(o => o.id))
    // Process articles
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
    
    // Sort based on selected method
    switch(sortMethod) {
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
    // Execute the function and store the result
    const foundArticles = findArticles(keyword, sortMethod);
    
    // Update sort indicator in the heading
    let sortIndicator = "";
    switch(sortMethod) {
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
    
    document.getElementById("search-verify").innerHTML = "<h1>Search Results For: " + keyword + "</h1>";
    
    // Clear previous results
    $("#searchContainer").empty();
    
    // Optional: Display the result in console
    console.log(foundArticles);

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
                    console.log('Match found: Article ID:' + originalArticle.id + ' has ' + foundArticle.count + ' keywords: ' + keyword);
                            
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
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initial display with default sort (relevance)
    displaySearchResults('relevance');
    
    // Add event listener for the sort dropdown
    document.querySelector('#sort-select').addEventListener('change', function() {
        const selectedSort = this.value;
        displaySearchResults(selectedSort);
    });
});
