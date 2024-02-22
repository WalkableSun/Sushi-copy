let mapClicker = document.querySelector(".map");
let popOver = document.querySelector(".popover")

let body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks (event){
  console.log(event.target);
  if (event.target.matches(".map") || event.target.matches(".closer")) {
    body.classList.toggle("showme");
    event.preventDefault();
   } else {
      body.classList.remove("showme");
    }
  }



document.addEventListener("click", handleClicks);
