


let cart = document.getElementById("cart-block");
let order = document.getElementById("order-block");

let cartSection = document.getElementById("cart-section");
let orderSection = document.getElementById("order-section");

cart.addEventListener('click' , ()=>{
        // run only if cart is not active
    if(!cart.classList.contains("active")){     
        orderSection.style.display = "none";
        cartSection.style.display = "";

        // add active class in cart and removing active class in order
        cart.classList.toggle("active");    
        order.classList.toggle("active");
    }
    
});

order.addEventListener('click', ()=>{
        // run only if order is not active
    if(!order.classList.contains("active")){
        cartSection.style.display = "none";
        orderSection.style.display = "";

        // add active order in cart and removing active class in cart
        order.classList.toggle("active");
        cart.classList.toggle("active");
    }
    
});



