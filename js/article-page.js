document.addEventListener("DOMContentLoaded", function() {
    // Get all URL parameters using URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    
    // Create variables for each query parameter
    const categoryId = parseInt(urlParams.get('category')) || 0;
    const subId = parseInt(urlParams.get('sub')) || 0;
    const articleId = parseInt(urlParams.get('article')) || 0;
    
    // Ensure valid articleId is within range
    if (articleId < 0 || articleId >= article.length) {
        console.error('Invalid article ID');
        return;
    }
    
    // Function to populate article information
    function populateArticleInfo() {
        const articleData = article[articleId];
        
        // Find the elements and populate them if they exist
        const titleElement = document.getElementById('art-title');
        const descElement = document.getElementById('art-desc');
        const authorElement = document.getElementById('art-author');
        const dateElement = document.getElementById('art-date');
        const logoElement = document.querySelector('a.logo');
        const linkElement = document.getElementById('article-link');

        if (titleElement && descElement && authorElement && dateElement) {
            // Use innerHTML to populate each field
            titleElement.innerHTML = "<h1>" + articleData.title + "</h1>";
            descElement.innerHTML = "<p>" + articleData.description + "</p>";
            authorElement.innerHTML = "<h3>Author: " + articleData.author + "</h3>";
            logoElement.href = `../html/category.html?category=${categoryId}&sub=${subId}`;
            if (articleData.date !== '') {
                dateElement.innerHTML = "<p>Date: " + articleData.date + "</p>";
            } else {
                dateElement.innerHTML = "";
            }
             if (articleData.sameorigin === false) {
                linkElement.innerHTML = `<iframe src="${articleData.link}" style="height:100%; width:100%;" title="${articleData.title}"></iframe>`;
            } else {
                // If sameorigin is true, redirect to the link
                window.location.href = articleData.link;
            }            
            // Also update the page title
            document.title = articleData.title;
            
            // Update the logo href to point to category page with parameters
            if (logoElement) {
                logoElement.href = `../html/category.html?category=${categoryId}&sub=${subId}`;
            }
            
            console.log(`Article loaded: ${articleData.title} (Category: ${categoryId}, Sub: ${subId}, Article: ${articleId})`);
        } else {
            // Elements not found yet, this could be because article-bar.html is still loading
            setTimeout(populateArticleInfo, 100);
        }
    }
    
    // Try to populate the article information
    populateArticleInfo();
});
