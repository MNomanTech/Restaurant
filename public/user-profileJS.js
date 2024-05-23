


let editBtn = document.getElementById("edit-btn");
let cancelBtn = document.getElementById("cancle-btn");
let submitBtn = document.getElementById("submit-btn");
let inp = document.getElementsByTagName("input");


editBtn.addEventListener('click', (event)=>{
    cancelBtn.style.display = "";
    submitBtn.style.display = "";

    editBtn.style.display = "none";

    inputDisable(false);

});

cancelBtn.addEventListener('click' , (event) =>{
    editBtn.style.display = "";

    cancelBtn.style.display = "none";
    submitBtn.style.display = "none";

    inputDisable(true);
});


let inputDisable = function(yes){

    for (const i of inp) {
        i.disabled = yes;
    }
};