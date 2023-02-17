
let price = 0;
let discount = 50;

let cheese = 250;
let chicken = 350;
let hawaiian = 300;
let margherita = 280;
let mushroom = 260;
let pepperoni = 275;
let seafood =350;
let sweet = 230;
let vegetarian = 260;

let cheeseEl = document.getElementById("cheese");
let chickenEl = document.getElementById("chicken");
let hawaiianEl = document.getElementById("hawaiian");
let margheritaEl = document.getElementById("margherita");
let mushroomEl = document.getElementById("mushroom");
let pepperoniEl = document.getElementById("pepperoni");
let seafoodEl = document.getElementById("seafood");
let sweetEl = document.getElementById("sweet");
let vegetarianEl = document.getElementById("vegetarian");

let totalEl  = document.getElementById("total-el");

let qtyEl = document.getElementById("qty");
// let qtyEl =  document.getElementById("qty").value;
let cashTendered = document.getElementById("cashT");

// DISCOUNT CATEGORIES
let noneEl = document.getElementById("none");
let pwdEl = document.getElementById("pwd");
let srEl = document.getElementById("sr");


let displayDscnt = document.getElementById("discount-el");

let dtotal = document.getElementById("DTotal-el");
let changeEl = document.getElementById("change-el");

function compute(){

    if(cheeseEl.checked === true){
        price += cheese;
    }

    if(chickenEl.checked === true){
        price += chicken;
    }

    if(hawaiianEl.checked === true){
        price += hawaiian;
    }

    if(margheritaEl.checked === true){
        price += margherita;
    }

    if(mushroomEl.checked === true){
        price += mushroom;
    }

    if(pepperoniEl.checked === true){
        price += pepperoni;
    }

    if(seafoodEl.checked === true){
        price += seafood;
    }

    if(sweetEl.checked === true){
        price += sweet;
    }

    if(vegetarianEl.checked === true){
        price += vegetarian;
    }

let qtyformula =  price * qtyEl.value;



totalEl.textContent =  qtyformula;
console.log(qtyEl)


if(noneEl.checked  === true){
    discount = 0;
    displayDscnt.textContent = "NoDiscount";
}

if(pwdEl.checked  === true){
    discount = discount * qtyEl.value;
    price = price - discount;
    displayDscnt.textContent = "20%";
}

if(srEl.checked  === true){
    discount =  discount * qtyEl.value;
    price = price - discount;

    displayDscnt.textContent = "20%";
}



let qd = qtyformula - discount;
dtotal.textContent ="₱ "+ qd;

let sukliCompute  = qtyformula - discount;
let sukliCompute2 = cashTendered.value - sukliCompute
changeEl.textContent = "₱ "+sukliCompute2 ;




}