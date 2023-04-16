let lightBoxItems = document.querySelectorAll(".lightBox-item");
let lightBoxImg = document.querySelector(".lightBox .lightBox-img");
let lightBox = document.querySelector(".lightBox");
let lightItemClose = document.getElementById("lightItemClose");

let arrowUp = document.getElementById("arrowUp");
console.log(arrowUp);

arrowUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

arrowUp.addEventListener("mouseover", function () {
  this.classList.remove("opacity-75");
});

arrowUp.addEventListener("mouseleave", function () {
  this.classList.add("opacity-75");
});

lightItemClose.addEventListener("click", function () {
  lightBox.classList.add("d-none");
});

for (let i = 0; i < lightBoxItems.length; i++) {
  lightBoxItems[i].addEventListener("click", function () {
    lightBox.classList.remove("d-none");
    lightBoxImg.src = this.getAttribute("src");
  });
}
