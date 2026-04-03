const products = [
  {
    id: 21,
    name: "Smart Home Security Camera",
    price: 3499,
    image: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg",
  },
  {
    id: 22,
    name: "Electric Kettle Stainless Steel",
    price: 1299,
    image: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg",
  },
  {
    id: 23,
    name: "Wireless Gaming Controller",
    price: 2499,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
  },
  {
    id: 24,
    name: "Mini Projector HD",
    price: 5999,
    image: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg",
  },
  {
    id: 25,
    name: "Air Fryer Digital",
    price: 6999,
    image: "https://images.pexels.com/photos/4108712/pexels-photo-4108712.jpeg",
  },
  {
    id: 26,
    name: "Robot Vacuum Cleaner",
    price: 12999,
    image: "https://images.pexels.com/photos/4108800/pexels-photo-4108800.jpeg",
  },
  {
    id: 27,
    name: "Smart Door Lock",
    price: 8499,
    image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg",
  },
  {
    id: 28,
    name: "4K Action Camera",
    price: 9999,
    image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
  },
  {
    id: 29,
    name: "Electric Toothbrush",
    price: 1999,
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg",
  },
  {
    id: 30,
    name: "Portable Monitor 15.6 Inch",
    price: 13999,
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
  },
  {
    id: 31,
    name: "WiFi Range Extender",
    price: 1799,
    image: "https://images.pexels.com/photos/4219860/pexels-photo-4219860.jpeg",
  },
  {
    id: 32,
    name: "Smart Thermostat",
    price: 5999,
    image: "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
  }
];

const productContainer = document.getElementById("product-list");

products.forEach((p) => {
  productContainer.innerHTML += `

  <div class="card text-center " style="height:30rem">
  <img src="${p.image}" class="card-img-top" width="100%" height="300px"; alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">₹${p.price}</p>
    <button class="btn btn-primary" onclick="addToCart(${p.id})">Add To Cart</button>
  </div>
</div>

  `;
});



function addToCart(id) {
  try {

    let cartItems = JSON.parse(localStorage.getItem("cartdata")) || [];

    let product = cartItems.find((prod) => prod.id === id);

    if (product) {
      product.quantity++;
    } else {
      product = products.find((prod) => prod.id === id);
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartdata", JSON.stringify(cartItems));


  } catch (error) {
    console.log(error);
  }
}

function ShowCart() {
  let cart = JSON.parse(localStorage.getItem("cartdata")) || [];

  let tbody = document.getElementById("t-body");

  tbody.innerHTML = "";

  cart.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>
      
        <div class="d-flex ">
          <button class="btn btn-success m-2" onclick="increase(${item.id})">+</button>

       <p class="fs-3 m-2"> ${item.quantity}</p>
        
        <button class="btn btn-danger m-2" onclick="decrease(${item.id})">-</button></div>

        </td>


        <td>₹${item.price * item.quantity}</td>


        <td>
        <button class="btn btn-outline-danger m-2" onclick="remove(${item.id})">Remove</button>
        </td>


      </tr>
    `;
  });

  



}

function openCart(){
  ShowCart();

  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.show();
}


function increase(id) {

  let data = JSON.parse(localStorage.getItem("cartdata"))

  let item = data.find((p) => p.id === id)


  if (item) {

    item.quantity++;

  }
  localStorage.setItem("cartdata", JSON.stringify(data));


  ShowCart()

}

function decrease(id) {

  let data = JSON.parse(localStorage.getItem("cartdata")) || []

  let item = data.find((p) => p.id === id)

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {

      data = data.filter((p) => p.id !== id)

    }

  }


  localStorage.setItem("cartdata", JSON.stringify(data));


  ShowCart()


}

function remove(id) {

  let data = JSON.parse(localStorage.getItem("cartdata")) || []

  data = data.filter((p) => p.id !== id)

  localStorage.setItem("cartdata", JSON.stringify(data))

  ShowCart()
}
