let products=[];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const container=document.getElementById("products-container");

const search=document.getElementById("search");

const category=document.getElementById("category");

async function loadProducts(){

const response=await fetch("data/products.json");

products=await response.json();

displayProducts(products);

}

function displayProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`

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

const item=products.find(product=>product.id===id);

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added To Cart");

}

search.addEventListener("input",filterProducts);

category.addEventListener("change",filterProducts);

function filterProducts(){

const text=search.value.toLowerCase();

const cat=category.value;

const filtered=products.filter(product=>{

const name=product.name.toLowerCase().includes(text);

const categoryMatch=cat==="All"||product.category===cat;

return name&&categoryMatch;

});

displayProducts(filtered);

}

loadProducts();