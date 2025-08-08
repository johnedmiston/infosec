document.addEventListener("navbarLoaded", function() {
    console.log("Navbar loaded, generating dynamic navigation");

    // Check if categories array exists
    if (typeof categories === 'undefined') {
        console.error('Categories array not found. Make sure article-entries.js is loaded before nav.js');
        return;
    }

    $.ajax({
        url: "dropdown.html",
        async: true,
        success: function(data) {
            $(".core-nav").html(data);
            var template = $(".core-nav").children();
            var originalTemplate = template.clone();

            // Clear the container to remove the template
            $(".core-nav").empty();

            // Build the nav
            for (var i = 0; i < categories.length; i++) {
                var category = categories[i];
                if (category !== null) {
                    var newCat = originalTemplate.clone();
                    newCat.addClass("id" + i);
                    $(".core-nav").append(newCat);
                    newCat.find('.whitespan').html('<span>' + category.name + '</span>');
                    newCat.find('.dd-text').html('<h3>' + category.description + '</h3>');
                    var subMenu = newCat.find('#dd-menu')[0];
                    for (var c = 0; c < category.sub.length; c++) {
                        subMenu.innerHTML += '<a href="category.html?category=' + i + '&sub=' + c + '" rel="noopener noreferrer"><h3>' + category.sub[c] + '</h3></a>';
                    }
                }
            }

            // Now that nav is built, add event listeners
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
                var wasSelected = clickedLink.classList.contains('dd-selected');
                catLinks.forEach(function(link) {
                    link.classList.remove('dd-selected');
                });
                if (!wasSelected) {
                    clickedLink.classList.add('dd-selected');
                }
            }

            catLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.stopPropagation();
                    click(link);
                });
            });

            // Dispatch event to indicate navigation is ready
            document.dispatchEvent(new Event("dynamicNavLoaded"));
            console.log("Dynamic navigation loaded successfully");
        }
    });
});
