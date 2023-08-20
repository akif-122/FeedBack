
let container = document.querySelector(".container")
let rate = document.querySelectorAll(".rating");
let btn = document.querySelector(".btn");

let selectedRating = "";
rate.forEach((item) => {
    item.addEventListener("click", function (e) {
        // remove active class from all rating
        selectedRating = e.target.innerText;
        
        rate.forEach((item) => {
            item.classList.remove("active")
        });

        // add active class which one clicked
        this.classList.add("active")

    });
});

btn.addEventListener("click", () => {
    if(selectedRating !== ""){
        container.innerHTML =  `
        <h3>Thank You!</h3>
        <h3>Feedback = ${selectedRating} </h3>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }else{
        alert("Please Select a FeedBack!")
    }
})