
 let links = document.querySelectorAll(".parent");

 links.forEach( (element) => {
     element.addEventListener("click", (e) => {
         e.preventDefault()
         element.nextElementSibling.style.display = "block";
        });
    
 });

let menu = document.querySelector(".humberMenu");

 let menuVisibility = false;

 menu.addEventListener("click", triggerNavigation);

 function triggerNavigation(){

     let getMenu = document.querySelector(".bottomNav");

     if(menuVisibility === false){
    
     getMenu.style.top = "10vh";
     menuVisibility = true;

    }else{
    
    getMenu.style.top = "-1500px";
     menuVisibility = false;

    }

 }

/*the above code triggers the menu*/

//animation code for collection

let collection = document.querySelector(".collectionWrapper");
console.log("this offsetTop from collection " + collection.offsetTop);

window.addEventListener("scroll", function(){
    
    if(this.pageYOffset >= 250){
        collection.style.marginTop = "8vh";
    }
});

function performAnimation(){

}