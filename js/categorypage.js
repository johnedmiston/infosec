const urlParams = new URLSearchParams(window.location.search);
const categoryUrl = urlParams.get('category');
const subcatUrl = urlParams.get('sub');
const categoryName = document.getElementById("category-name");
const targetCategory = categories[parseInt(categoryUrl)].sub[parseInt(subcatUrl)];
console.log('Looking for category:', targetCategory);

categoryName.innerHTML = "<h1>" + targetCategory + "</h1>";

// Use this alternative approach to avoid nesting everything in a callback
$.ajax({
    url: "/html/elements/cards.html",
    async: false,
    success: function(data) {
        $("#cardContainer").html(data);
        var template = $("#cardContainer").children();
        var originalTemplate = template.clone();
        
        // Clear the container to remove the template
        $("#cardContainer").empty();
        
        // Process articles
        for (var i = 0; i < article.length; i++) {
            if (article[i] !== null) {
                for (var c = 0; c < article[i].categories.length; c++) {
                    var category = article[i].categories[c];
                    
                    // FIXED: Check if this article has the target category
                    if (category === targetCategory) {
                        console.log('Match found: Article ' + i + ' has category ' + category);
                        var newCard = originalTemplate.clone();
                        newCard.addClass("id" + i);
                        $("#cardContainer").append(newCard);

                        // IMMEDIATELY POPULATE THIS CARD
                        let articleObj = article[i];
                        newCard.find('#card-image').html('<img src="/img/articles/' + i + '.png" alt="' + articleObj.title + '">');
                        newCard.find('#card-header').html('<h1>' + articleObj.title + '</h1>');
                        newCard.find('#card-text').html('<p>' + articleObj.description + '</p>');
                        newCard.find('#card-link').html('<a href="' + articleObj.link + '">Open Page</a>');
                        newCard.find('#card-date').html('<p>' + articleObj.date + '</p>');
                        newCard.find('#card-author').html('<p>' + articleObj.author + '</p>');

                        break; // No need to check other categories
                    } else {
                        console.log('No match: Article ' + i + ' does not have this category.');
                    }
                }
            }
        }
    }
});