document.addEventListener("DOMContentLoaded",function(){
    const DropDownButton  = document.querySelector(".menu")
    const DropDownMenu = document.querySelector(".menu-content")

    DropDownButton.addEventListener("click", function(){
        DropDownMenu.style.display = DropDownMenu.style.display === "block" ? "none" : "block";
    
     })

})

