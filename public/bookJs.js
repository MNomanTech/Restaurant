


let book = document.getElementById("book-now");
let booked = document.getElementById("booked-list");

let bookSection = document.getElementById("book-now-section");
let bookedSection = document.getElementById("booked-list-section");


book.addEventListener('click' , ()=>{
        // run only if book now is not active
    if(!book.classList.contains("active")){     
        bookedSection.style.display = "none";
        bookSection.style.display = "";

        // add active class in book and removing active class in booked
        book.classList.toggle("active");    
        booked.classList.toggle("active");
    }
    
});

booked.addEventListener('click', ()=>{
        // run only if booked is not active
    if(!booked.classList.contains("active")){
        bookSection.style.display = "none";
        bookedSection.style.display = "";

        // add active class in order and removing active class in cart
        booked.classList.toggle("active");
        book.classList.toggle("active");
    }
    
});



