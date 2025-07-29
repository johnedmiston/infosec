document.addEventListener("navbarLoaded", function() {
    console.log("Navbar loaded, generating dynamic navigation");

    // Check if categories array exists
    if (typeof categories === 'undefined') {
        console.error('Categories array not found. Make sure article-entries.js is loaded before nav.js');
        return;
    }
    $.ajax({
    url: "/html/elements/dropdown.html",
    async: false,
    success: function(data) {
        $(".core-nav").html(data);
        var template = $(".core-nav").children();
        var originalTemplate = template.clone();
        
        // Clear the container to remove the template
        $(".core-nav").empty();
        
        // Process articles
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            if (category !== null) {
                var newCat = originalTemplate.clone();
                newCat.addClass("id" + i);
                $(".core-nav").append(newCat);
                newCat.find('.whitespan').html('<span>' + category.name + '</span>');
                newCat.find('.dd-text').html('<h3>' + category.description + '</h3>');
                var subMenu = newCat.find('#dd-menu')[0]; // Changed to ID selector
                for (var c = 0; c < category.sub.length; c++) { // Fixed array access
                    subMenu.innerHTML += '<a href="category.html?category=' + i + '&sub=' + c + '" rel="noopener noreferrer"><h3>' + category.sub[c] + '</h3></a>';
                }
            }
        }
    }
    });
    // Dispatch event to indicate navigation is ready
    document.dispatchEvent(new Event("dynamicNavLoaded"));
    console.log("Dynamic navigation loaded successfully");

    var catLinks = [];
    for (var i = 0; i < categories.length; i++) {
        if (categories[i]) {
            var element = document.querySelector(".dropdown.id" + i);
            if (element) {
                catLinks.push(element);
            }
        }
    }

    function click(clickedLink) {
        // Check if clicking the already selected item
        var wasSelected = clickedLink.classList.contains('dd-selected');
        
        // Remove 'dd-selected' from all links
        catLinks.forEach(function(link) {
            link.classList.remove('dd-selected');
        });
        
        // If it wasn't selected before, select it
        if (!wasSelected) {
            clickedLink.classList.add('dd-selected');
        }
    }

    // Add event listeners
    catLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            click(link);
        });
    });
});
