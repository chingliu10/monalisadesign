
let menu = document.querySelector(".humberMenu");

let menuVisibility = false;

menu.addEventListener("click", triggerNavigation);

function triggerNavigation(){

    let getMenu = document.querySelector(".bottomNav");

    if(menuVisibility === false){
    
    getMenu.style.top = "10vh";
    menuVisibility = true;

    }else{
    
    getMenu.style.top = "-80vh";
    menuVisibility = false;

    }

}

/*the above code triggers the menu*/