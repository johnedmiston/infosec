var home = document.getElementById('home');
var church = document.getElementById('church');
var business = document.getElementById('business');
    
function homeClick(){
    if(home.classList.contains('dd-selected')){
        home.classList.remove('dd-selected');
        church.classList.remove('dd-selected');
        business.classList.remove('dd-selected');
    }else{
        home.classList.add('dd-selected');
        church.classList.remove('dd-selected');
        business.classList.remove('dd-selected');
    } 
}
function churchClick(){
    if(church.classList.contains('dd-selected')){
        home.classList.remove('dd-selected');
        church.classList.remove('dd-selected');
        business.classList.remove('dd-selected');
    }else{
        home.classList.remove('dd-selected');
        church.classList.add('dd-selected');
        business.classList.remove('dd-selected');
    }
}
function businessClick(){
    if(business.classList.contains('dd-selected')){
        home.classList.remove('dd-selected');
        church.classList.remove('dd-selected');
        business.classList.remove('dd-selected');
    }else{
        home.classList.remove('dd-selected');
        church.classList.remove('dd-selected');
        business.classList.add('dd-selected');
    }
}
if (home) {
    home.addEventListener('click', function(){
        homeClick();
    });
}

if (church) {
    church.addEventListener('click', function(){
        churchClick();
    });
}

if (business) {
    business.addEventListener('click', function(){
        businessClick();
    });
}

