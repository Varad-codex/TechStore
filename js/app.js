const productGrid = document.getElementById("featured-products");

let products = [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadProducts(){

document.getElementById("loader").style.display="block";

const response = await fetch("data/products.json");

products = await response.json();

displayProducts(products);

document.getElementById("loader").style.display="none";

updateCartCount();

}

function displayProducts(products){

productGrid.innerHTML="";

products.forEach(product=>{

productGrid.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p>

⭐ ${product.rating}

</p>

<p class="price">

$${product.price}

</p>

<button onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

`;

});

}

function addToCart(id){

const item = products.find(product=>product.id===id);

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Product Added Successfully!");

}

function updateCartCount(){

const counter=document.getElementById("cart-count");

if(counter){

counter.textContent=cart.length;

}

}

loadProducts();