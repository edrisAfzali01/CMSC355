let textArea = document.getElementById("feed-field");
let charCount = document.getElementById("charcount");

textArea.addEventListener('input', ()=>{
    let remaining = 1000 - textArea.value.length;
    charCount.textContent = remaining;
});

let submit = document.getElementById('submit');
let back = document.getElementById('back');
back.addEventListener('click', ()=>{
    window.location.href = 'Sprint2_ratingInterface.html';
});

let feedback = document.getElementById('feedback');
let modal = document.getElementById('thanks');
feedback.addEventListener('submit', function(event){
    event.preventDefault();

    modal.style.display = "flex";

});

let edit = document.getElementById('edit-prompt');
edit.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

let close = document.getElementById('close-prompt');
close.addEventListener('click', ()=>{
    window.location.href = "Sprint2_ratingInterface.html";
});

//this is the star interaction
//objective: use some primitive data!

const stars = document.querySelectorAll(".STARS .star");
let rate = 0; 

stars.forEach(star => {
    star.addEventListener("click", () => {
        initialRating = parseInt(star.getAttribute("data-value"), 10);
        if( rate === initialRating){ //this if else unhighlights if the button
            //if this button was already a highlighted one
            rate = 0;
        }
        else{
            rate = initialRating;
        }
        updateStar(rate);
    });
});


function updateStar(rating) {
    stars.forEach(star => {
        if (parseInt(star.getAttribute("data-value"), 10) <= rating) {
            star.querySelector('i').classList.add('fa-solid'); 
            //grabbing <i> tag in star class, making it solid if it was clicked
        } else {
            star.querySelector('i').classList.remove('fa-solid'); 
            star.querySelector('i').classList.add('fa-regular'); 
        }
    });
}
//Star function:
//Okay; so starting from line 37, we grab all elements in the document
//that are under the class '.STARS' and '.star'; they each have
//their own data value, represented 1-5, corresponding to a rating level
//we add a click event, and grab the corresponding data value for the button clicked, then
//update the icon for the button to be filled
//To unhighlight; the function just checks if the clicked button's 
//corresponding value is equal to the value of 'rate'; if so, it resets