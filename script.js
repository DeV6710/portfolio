// used Ai for this but I know what does it do 

    //create a var dropBtn and find me #drop
    const dropBtn = document.getElementById("drop");
    //create a var navContent and find me #nav-content
    const navContent = document.getElementById("nav-content");
    //create an event for dropBtn when clicked toggle 
    //a class "show" to display navcontent 
    dropBtn.addEventListener("click", () => {
        navContent.classList.toggle("show");
    });




