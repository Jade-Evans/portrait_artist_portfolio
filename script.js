

//**********************JS for gallery icons going darker when hover ******************//

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

//We start by assigning a variable to all image wrappers (seeing as we'll use a loop for a repeatable function)
    const imageWrappers = document.querySelectorAll(".image-wrapper");

//Here we are using a forEach to loop through every image-wrapper as assigned above
//we're assigning a function called "wrapper" which is declared within this to each iteration
    imageWrappers.forEach(function(wrapper){

    //STEP ONE: For each wrapper we find, we first need to find the overlay element assigned to it
    //we use the below for this, and assign it a variable name (const overlay)

        const overlay = wrapper.querySelector(".overlay");

    //STEP TWO: we add an event listener to tell the program when we want the function to be executed:

        wrapper.addEventListener("mouseover", function(){
        overlay.style.opacity = "0.7"
        })
    //STEP THREE: we make sure when we're not hovered it is no longer dark by applying similar logic to above. 
    wrapper.addEventListener("mouseout", function(){
        overlay.style.opacity = "0"
        })
    })
})