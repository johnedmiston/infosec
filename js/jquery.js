document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('article')) || 0;
    const articleData = article[articleId];
    if (articleData.sameorigin !== true){
        if (articleData.sameorigin == false) {
            console.log('Same origin is false');
                $("#article-bar-plh").load("/html/elements/article-bar.html");
                $("#article-link").innerHTML = `<iframe src="${articleData.link}" style="height:100%; width:100%;" title="${articleData.title}"></iframe>`;                        
        } else {
            console.log('Same origin is true');
        }
    }
     $("#navbar-plh").load("/html/elements/navbar.html", function() {
         console.log("Navbar loaded successfully");
         document.dispatchEvent(new Event("navbarLoaded"));
     });
    $("#category-plh").load("/html/category.html");
});

    