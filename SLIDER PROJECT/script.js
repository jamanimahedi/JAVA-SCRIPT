const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
];

let index = 0;
const img = document.getElementById("img");

function showImage() {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 200);
}

function nextimg() {
  index = (index + 1) % images.length;
  showImage();
}

function previmg() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

/* Auto slider */
setInterval(nextimg, 3000);

/* Initial load */
showImage();