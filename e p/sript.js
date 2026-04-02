const product = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
  },
  {
    id: 3,
    name: "Laptop",
    price: 55999,
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 799,
    img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 2999,
    img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
  },
  {
    id: 6,
    name: "Men Shirt",
    price: 1299,
    img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
  },
  {
    id: 7,
    name: "Smartphone",
    price: 19999,
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
  },
  {
    id: 8,
    name: "DSLR Camera",
    price: 45999,
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
  },
  {
    id: 9,
    name: "Men Leather Jacket",
    price: 2999,
    img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg"
  },
  {
    id: 10,
    name: "Running Shoes",
    price: 2499,
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 999,
    img: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg"
  },
  {
    id: 12,
    name: "Girl Shirt",
    price: 1199,
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg"
  },
  {
    id: 13,
    name: "Coffee Maker",
    price: 3499,
    img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
  },
  {
    id: 14,
    name: "Tablet",
    price: 15999,
    img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
  },
  {
    id: 15,
    name: "LED Monitor",
    price: 8999,
    img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
  }
];;

product.forEach((a)=>{
    const productlist = document.getElementById("productlist")

    productlist.innerHTML +=`
    <div class="col-md-4 mt-3">
    <div class="card product-card rounded-4">
  <img src="${a.img}" class="card-img-top rounded-4" alt="${a.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${a.name}</h5>
   
    <button class="btn btn-outline-primary">Add To Cart</button>
  </div>
</div>
    </div>
    `
})