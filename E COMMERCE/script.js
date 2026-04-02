const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
  {
    id: 3,
    name: "Laptop",
    price: 55999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1499,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
  },
  {
    id: 7,
    name: "DSLR Camera",
    price: 45999,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 2499,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    id: 9,
    name: "Backpack",
    price: 1299,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 999,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
  },
  {
    id: 11,
    name: "Office Chair",
    price: 6999,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
  },
  {
    id: 12,
    name: "Coffee Mug",
    price: 499,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  },
  {
    id: 13,
    name: "Mobile Phone",
    price: 25999,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
  },
  {
    id: 14,
    name: "Perfume",
    price: 1799,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
  },
  {
    id: 15,
    name: "T-Shirt",
    price: 799,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
  },
];

products.forEach((p) => {
  const productList = document.getElementById("product-list");

  productList.innerHTML += `
    
    <div class="col-md-4 mt-3">
    <div class="card product-card shadow rounded-4">
  <img src="${p.image}" class="card-img-top img-fluid rounded-4" alt="${p.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${p.name}</h5>
     <h4 class="card-text">₹${p.price} </h4>
  <button class="btn btn-primary" onclick="addToCart(${p.id})" >Add to cart</button>
  </div>
</div>
    
    </div>

    `;
});

// localStorage concept added

// const data = { name: "electronic", qty: 1 };

// localStorage.setItem("cartData", JSON.stringify(data));

// const productData = localStorage.getItem("cartData");

// console.log("productData", JSON.parse(productData));

let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

console.log("cartItems", cartItems);

function addToCart(id) {
  try {
    let product = cartItems.find((p) => p.id === id);

    console.log("product already added", product);

    if (product) {
      product.qty++;
    } else {
      product = products.find((p) => p.id === id);

      cartItems.push({ ...product, qty: 1 });

      console.log("product new added", product);
    }

    localStorage.setItem("cartData", JSON.stringify(cartItems));

    alert("item added in cart");
  } catch (error) {
    console.log(error);
  }
}

function showModal() {
  try {
    const cartList = document.getElementById("cartList");

    let modal = new bootstrap.Modal(cartList);

    modal.show();
    showCartList();
  } catch (error) {
    console.log(error);
  }
}

function showCartList() {
  try {
    const cartTable = document.getElementById("cartTable");

    cartTable.innerHTML = "";

    cartItems.forEach((p) => {
      cartTable.innerHTML += `
      
      <tr>
      <td>${p.name}</td>
      <td>
      <div class="d-flex gap-2">

      <button class="btn btn-outline-success" >+</button>
      
      <h5>${p.qty}</h5>
 <button class="btn btn-outline-danger" >-</button>
      
      </div>
      </td>
      <td>₹ ${p.price * p.qty}</td>
      <td><button class="btn btn-outline-danger" >remove</button></td>
      
      </tr>
      

      `;
    });
  } catch (error) {}
}