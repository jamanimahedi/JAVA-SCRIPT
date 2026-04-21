const slides = [
  {
    img: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Sunset",
    desc: "Beautiful sunset landscape"
  },
  {
    img: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Road View",
    desc: "Open highway adventure road"
  },
  {
    img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Coffee",
    desc: "Coffee cup aesthetic setup"
  },
  {
    img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Laptop",
    desc: "Modern laptop desk setup"
  },
  {
    img: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Flowers",
    desc: "Beautiful flower garden closeup"
  },
  {
    img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Night City",
    desc: "Night city lights view"
  },
  {
    img: "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Bike",
    desc: "Stylish bike photography"
  },
  {
    img: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Sky Clouds",
    desc: "Blue sky clouds nature"
  },
  {
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Building",
    desc: "Modern architecture angle"
  },
  {
    img: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Forest Path",
    desc: "Nature tree path journey"
  }
];

let index = 0;

const image = document.getElementById("slider-img");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

function showSlide() {
  image.src = slides[index].img;
  title.innerText = slides[index].title;
  desc.innerText = slides[index].desc;
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

setInterval(nextSlide, 3000);