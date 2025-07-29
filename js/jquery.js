document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('article')) || 0;
    const articleData = article[articleId];
     $("#navbar-plh").load("navbar.html", function() {
         console.log("Navbar loaded successfully");
         document.dispatchEvent(new Event("navbarLoaded"));
     });
    $("#category-plh").load("category.html", function() {
        console.log("Category loaded successfully");
        document.dispatchEvent(new Event("categoryLoaded"));
    });
    $("#footer-plh").load("footer.html", function() {
        console.log("Footer loaded successfully");
        document.dispatchEvent(new Event("footerLoaded"));
    });
    
});

    