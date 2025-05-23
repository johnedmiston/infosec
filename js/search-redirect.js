/**
 * search-redirect.js
 * Takes a search query from form and redirects to search.html with the query parameter
 */

document.addEventListener('navbarLoaded', function() {
    // Get the form - since there's only one form on the page
    const searchForm = document.querySelector('#searchForm');    
    // Add submit event listener to the form
    searchForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Find the search input field (typically the text input in the form)
        const searchInput = searchForm.querySelector('input[type="text"], input[type="search"], input:not([type="submit"])');
        
        // Get the search query
        const searchQuery = searchInput.value.trim();
        
        // If we have a query, redirect to search page
        if (searchQuery) {
            window.location.href = `search.html?q="${encodeURIComponent(searchQuery)}"`;
        }else {
            alert("Please enter your search words.");
        }
    });
});
