const urlParams = new URLSearchParams(window.location.search);
const categoryUrl = urlParams.get('category');
const subcatUrl = urlParams.get('sub');
const categoryName = document.getElementById("category-name");
const targetCategory = categories[parseInt(categoryUrl)].sub[parseInt(subcatUrl)];
console.log('Looking for category:', targetCategory);

categoryName.innerHTML = "<h1>" + targetCategory + "</h1>";
document.title = targetCategory + " - Information Security Links";

// Use this alternative approach to avoid nesting everything in a callback
$.ajax({
    url: "cards.html",
    async: true,
    success: function(data) {
        $("#cardContainer").html(data);
        var template = $("#cardContainer").children();
        var originalTemplate = template.clone();
        
        // Clear the container to remove the template
        $("#cardContainer").empty();
        
        var maxId = Math.max(...article.map(o => o.id))
        // Process articles
        for (var i = 0; i < maxId; i++) {
            var articleId = article.find(a => a.id === i);
            if (articleId !== null) {
                for (var c = 0; c < articleId.categories.length; c++) {
                    var category = articleId.categories[c];
                    
                    // FIXED: Check if this article has the target category
                    if (category === targetCategory) {
                        console.log('Match found: Article ID:' + i + ' has category ' + category);
                        var newCard = originalTemplate.clone();
                        newCard.addClass("id" + i);
                        $("#cardContainer").append(newCard);

                        // IMMEDIATELY POPULATE THIS CARD
                        newCard.find('#card-image').html('<img src="img/articles/' + i + '.png" alt="' + articleId.title + '">');
                        newCard.find('#card-header').html('<h1>' + articleId.title + '</h1>');
                        newCard.find('#card-text').html('<p>' + articleId.description + '</p>');
                        newCard.find('#card-link').html('<a href="' + articleId.link + '" rel="noopener noreferrer" target="_blank">Open Page</a>');
                        newCard.find('#card-date').html('<p>' + articleId.date + '</p>');
                        newCard.find('#card-author').html('<p>' + articleId.author + '</p>');

                        break; // No need to check other categories
                    } else {
                        console.log('No match: Article ID:' + i + ' does not have this category.');
                    }
                }
            }
        }
    }
});