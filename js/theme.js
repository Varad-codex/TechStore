const themeBtn = document.getElementById("theme-btn");

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        themeBtn.textContent="☀️";

    }

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.textContent="☀️";

}

else{

localStorage.setItem("theme","light");

themeBtn.textContent="🌙";

}

});

}