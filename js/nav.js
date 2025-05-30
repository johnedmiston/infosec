<<<<<<< HEAD
document.addEventListener("navbarLoaded", function() {
    console.log("Navbar loaded, attaching event listeners");

    var home = document.getElementById('home');
    var church = document.getElementById('church');
    var business = document.getElementById('business');

    function homeClick() {
        console.log('home clicked');
        if (home.classList.contains('dd-selected')) {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        } else {
            home.classList.add('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        }
    }

    function churchClick() {
        console.log('church clicked');
        if (church.classList.contains('dd-selected')) {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        } else {
            home.classList.remove('dd-selected');
            church.classList.add('dd-selected');
            business.classList.remove('dd-selected');
        }
    }

    function businessClick() {
        console.log('business clicked');
        if (business.classList.contains('dd-selected')) {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        } else {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.add('dd-selected');
        }
    }

    if (home) {
        home.addEventListener('click', homeClick);
    }

    if (church) {
        church.addEventListener('click', churchClick);
    }

    if (business) {
        business.addEventListener('click', businessClick);
    }
});
=======
document.addEventListener("navbarLoaded", function() {
    console.log("Navbar loaded, attaching event listeners");

    var home = document.getElementById('home');
    var church = document.getElementById('church');
    var business = document.getElementById('business');

    function homeClick() {
        console.log('home clicked');
        if (home.classList.contains('dd-selected')) {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        } else {
            home.classList.add('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        }
    }

    function churchClick() {
        console.log('church clicked');
        if (church.classList.contains('dd-selected')) {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        } else {
            home.classList.remove('dd-selected');
            church.classList.add('dd-selected');
            business.classList.remove('dd-selected');
        }
    }

    function businessClick() {
        console.log('business clicked');
        if (business.classList.contains('dd-selected')) {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.remove('dd-selected');
        } else {
            home.classList.remove('dd-selected');
            church.classList.remove('dd-selected');
            business.classList.add('dd-selected');
        }
    }

    if (home) {
        home.addEventListener('click', homeClick);
    }

    if (church) {
        church.addEventListener('click', churchClick);
    }

    if (business) {
        business.addEventListener('click', businessClick);
    }
});
>>>>>>> dd502d5c71f007656c996d8d4822b3bff832f849
