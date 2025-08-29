

//**********************JS for gallery icons going darker when hover ******************//

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

//Assign variable name to all image wrappers (for use in loop)
    const imageWrappers = document.querySelectorAll(".image-wrapper");

//Use forEach function to loop through every image-wrapper as assigned above
//we're assigning a function called "wrapper" which is declared within this to each iteration
    imageWrappers.forEach(function(wrapper){
        const overlay = wrapper.querySelector(".overlay");
        wrapper.addEventListener("mouseover", function(){
            overlay.style.opacity = "1"
        })
        wrapper.addEventListener("mouseout", function(){
        overlay.style.opacity = "0"
        })
    })
})