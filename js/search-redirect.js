/**
 * search-redirect.js - Fixed version
 * Takes a search query from form and redirects to search.html with the query parameter
 */

document.addEventListener('navbarLoaded', function() {
    // Get the search form after navbar has loaded
    const searchForm = document.querySelector('#searchForm');
    
    if (searchForm) {
        // Replace the form's native submit with our custom handler
        searchForm.onsubmit = function(event) {
            // Prevent the default action
            event.preventDefault();
            event.stopPropagation();
            
            // Get the search query
            const searchInput = document.getElementById('searchQuery');
            const searchQuery = searchInput.value.trim();
            
            // Redirect to the search page if we have a query
            if (searchQuery) {
                console.log("Redirecting search to: search.html");
                // Force navigation to the search page
                window.location.href = "search.html?q=" + encodeURIComponent(searchQuery);
                return false;
            } else {
                alert("Please enter search terms");
                return false;
            }
        };
        
        // Also attach a click handler to the submit button
        const submitBtn = searchForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.onclick = function(event) {
                event.preventDefault();
                searchForm.onsubmit(event);
                return false;
            };
        }
    }
});
