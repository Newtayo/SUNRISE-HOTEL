const hamburger = document.getElementById('hamburger')
const curtain = document.getElementById('curtain')


hamburger.addEventListener('click', ()=>{
    if (hamburger.innerHTML == "🗙") {
        hamburger.innerHTML = "&#9776;";
      } 
      else hamburger.innerHTML = "&#x1F5D9;";
  
      curtain.classList.toggle("hide");
    });