const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 14999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 2,
    name: "Laptop",
    price: 49999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500",
  },
  {
    id: 4,
    name: "Wireless Keyboard",
    price: 999,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    id: 5,
    name: "Bluetooth Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=500",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
  },
  {
    id: 7,
    name: "Tablet",
    price: 19999,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 1299,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },
  {
    id: 9,
    name: "External Hard Drive",
    price: 2499,
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=500",
  },
  {
    id: 10,
    name: "USB Flash Drive",
    price: 499,
    image: "https://images.unsplash.com/photo-1587033411392-99a1b7f8e1c4?w=500",
  },
  {
    id: 11,
    name: "Webcam HD",
    price: 1599,
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500",
  },
  {
    id: 12,
    name: "Power Bank",
    price: 1199,
    image: "https://images.unsplash.com/photo-1609592806596-4d7b6c42fbaa?w=500",
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    price: 1999,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=500",
  },
  {
    id: 14,
    name: "Monitor 24 Inch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  },
  {
    id: 15,
    name: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500",
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
