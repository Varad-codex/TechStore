const cartItems=document.getElementById("cart-items");

const total=document.getElementById("total");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function displayCart(){

cartItems.innerHTML="";

let totalPrice=0;

cart.forEach((product,index)=>{

totalPrice+=product.price;

cartItems.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">

$${product.price}

</p>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

});

total.textContent="$"+totalPrice;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

displayCart();