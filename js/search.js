function validateForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryUrl = urlParams.get('q');
    // Remove any surrounding quotes from the search term
    return queryUrl ? queryUrl.replace(/^"|"$/g, '') : '';
}
var keyword = validateForm();
console.log("Keyword: " + keyword);

document.title = keyword + " - Information Security Links";
// Function to count occurrences of a keyword in a string
function countOccurrences(str, keyword) {
    if (!str) return 0;
    const regex = new RegExp(keyword, 'gi');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Function to find and sort  articles
function findArticles(findKeyword) {
    // Initialize results array OUTSIDE the loop
    var articleResults = [];
    
    // Iterate through all articles
    var maxId = Math.max(...article.map(o => o.id))
        // Process articles
    for (var i = 0; i <= maxId; i++) {
        const currentArticle = article.find(a => a.id === i);
        if (!currentArticle) continue; // Skip if currentArticle is undefined
        const title = currentArticle.title || '';
        const description = currentArticle.description || '';
        
        // Count occurrences in title and description
        const titleCount = countOccurrences(title, findKeyword);
        const descriptionCount = countOccurrences(description, findKeyword);
        const totalCount = titleCount + descriptionCount;
        
        // Only add articles that contain the keyword at least once
        if (totalCount > 0) {
            articleResults.push({
                link: currentArticle.link,
                title: title,
                description: description,
                date: currentArticle.date,
                author: currentArticle.author,
                count: totalCount
            });
        }
    }
    
    // Sort by count in descending order
    articleResults.sort((a, b) => b.count - a.count);
    
    return articleResults;
}


// Execute the function and store the result
const foundArticles = findArticles(keyword);
console.log("Found Articles HERE: ", foundArticles);
if (foundArticles.length === 0) {
    document.getElementById("search-verify").innerHTML = "<h1>No Results Found For: " + keyword + "</h1>";
}else{
    document.getElementById("search-verify").innerHTML = "<h1>" + foundArticles.length + " Search Results for: " + keyword + "</h1>";
}
// Optional: Display the result
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
        for (var a = 0; a < foundArticles.length; a++) {
            var foundArticle = foundArticles[a];
            for (var i = 0; i < article.length; i++) {
                var articleId = article.find(a => a.id === i);
                if (articleId) { // Check if articleId is not undefined
                    var articleTitle = articleId.title || '';
                    var foundTitle = foundArticle.title || '';
                    if (articleTitle === foundTitle) {
                        console.log('Match found: Article ID:' + i + ' has ' + foundArticle.count + ' keywords: ' + keyword);
                        var articleObj = articleId;
                        
                        // Create a new card for each found article
                        var newCard = originalTemplate.clone();
                        newCard.addClass("id" + i);
                        $("#searchContainer").append(newCard);

                        // IMMEDIATELY POPULATE THIS CARD
                        newCard.find('#card-image').html('<img src="/img/articles/' + i + '.png" alt="' + articleObj.title + '">');
                        newCard.find('#card-header').html('<h1>' + articleObj.title + '</h1>');
                        newCard.find('#card-text').html('<p>' + articleObj.description + '</p>');
                        newCard.find('#card-link').html('<a href="' + articleObj.link + '" target="_blank">Open Page</a>');
                        newCard.find('#card-date').html('<p>' + articleObj.date + '</p>');
                        newCard.find('#card-author').html('<p>' + articleObj.author + '</p>');

                        break; // No need to check other categories
                    }
                }            
            }
        }
    }
});