function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
let currentIndex = 1;
function setCurrentImage(index) {
  currentIndex = index;
  const imageSrc =
    document.getElementsByClassName("gallery-img")[currentIndex - 1].src;
  document.getElementById("lightbox-img").src = imageSrc;
  const imageAlt =
    document.getElementsByClassName("gallery-img")[currentIndex - 1].alt;
  document.getElementById("caption").innerHTML = imageAlt;
}
