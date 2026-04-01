const products = [
  {
    id: 1,
    name: "Smart WiFi Plug",
    price: 899,
    image: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg"
  },
  {
    id: 2,
    name: "Portable Air Humidifier",
    price: 999,
    image: "https://images.pexels.com/photos/3735212/pexels-photo-3735212.jpeg"
  },
  {
    id: 3,
    name: "RGB LED Strip Light",
    price: 1499,
    image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
  },
  {
    id: 4,
    name: "Wireless Doorbell Camera",
    price: 3999,
    image: "https://images.pexels.com/photos/6195123/pexels-photo-6195123.jpeg"
  },
  {
    id: 5,
    name: "Electric Kettle Steel",
    price: 1199,
    image: "https://images.pexels.com/photos/6813697/pexels-photo-6813697.jpeg"
  },
  {
    id: 6,
    name: "Laptop Cooling Pad",
    price: 999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
  },
  {
    id: 7,
    name: "Desk Organizer Box",
    price: 499,
    image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg"
  },
  {
    id: 8,
    name: "Digital Kitchen Weight Scale",
    price: 799,
    image: "https://images.pexels.com/photos/5341966/pexels-photo-5341966.jpeg"
  },
  {
    id: 9,
    name: "Rechargeable Emergency Light",
    price: 899,
    image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
  },
  {
    id: 10,
    name: "Clothes Steamer Iron",
    price: 1499,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg"
  },
  {
    id: 11,
    name: "Wireless Keyboard Mouse Combo",
    price: 1599,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
  },
  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    price: 1299,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg"
  }
];
const productContainer = document.getElementById("product-list");

products.forEach(p => {

  productContainer.innerHTML += `

  <div class="card text-center " style="height:30rem">
  <img src="${p.image}" class="card-img-top" width="100%" height="300px"; alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">₹${p.price}</p>
    <button class="btn btn-primary" onclick="addToCart(${p.id})">Buy</button>
  </div>
</div>

  `

})


function addToCart(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = products.find(p => p.id === id);

  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));


}



function ShowCart() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let tbody = document.getElementById("t-body");

  tbody.innerHTML = "";



  cart.forEach(item => {

    tbody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>
        <button class="btn btn-success m-2">+</button>

        ${item.quantity}
        
        <button class="btn btn-danger m-2">-</button>

        </td>


        <td>₹${item.price * item.quantity}</td>
      </tr>
    `;
  });




  const myModal = new bootstrap.Modal(
    document.getElementById("exampleModal")
  );

  myModal.show();
}