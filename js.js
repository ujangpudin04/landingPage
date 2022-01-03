let texthome = document.getElementsByClassName("text-home")[0];

// console.log(h2);
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  texthome.style.left = value * 0.5 + "px";
});
