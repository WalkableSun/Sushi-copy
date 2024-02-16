let mapClicker = document.querySelector(".map");
let popOver = document.querySelector(".popover")

let body = document.querySelector("body");

function handleClicks (event){
  console.log(event.target);


  if(event.target.matches(".map")){
    event.preventDefault();
    body.classList.toggle("showme");
  }
}

document.addEventListener("click", handleClicks);
