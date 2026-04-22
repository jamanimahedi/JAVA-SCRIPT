const slides = [
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    title: "Mountains",
    desc: "Beautiful mountain landscape view"
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    title: "Road",
    desc: "Nature road highway scene"
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    title: "Beach",
    desc: "Ocean beach sunset beauty"
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
    title: "Forest",
    desc: "Deep forest green trees"
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    title: "Lake",
    desc: "Peaceful lake mountain reflection"
  },
  {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    title: "Path",
    desc: "Forest walking path view"
  },
  {
    img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200",
    title: "Flowers",
    desc: "Colorful flower garden nature"
  },
  {
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200",
    title: "River",
    desc: "Fresh river natural landscape"
  },
  {
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
    title: "Sky",
    desc: "Cloudy blue sky nature"
  },
  {
    img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200",
    title: "Sunset",
    desc: "Golden sunset landscape scene"
  }
];

let index = 0;

function showSlide() {
  document.getElementById("sliderImage").src = slides[index].img;
  document.getElementById("title").innerText = slides[index].title;
  document.getElementById("desc").innerText = slides[index].desc;
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide();
}

showSlide();