import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
var firebaseConfig = {
  apiKey: "AIzaSyAV348JSscviViD2GQTfQ-Ej5ywF0zEJBk",
  authDomain: "ecommerce-adb99.firebaseapp.com",
  databaseURL: "https://ecommerce-adb99-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "ecommerce-adb99",
  storageBucket: "ecommerce-adb99.appspot.com",
  messagingSenderId: "20554738672",
  appId: "1:20554738672:web:9d3cb92e1fde0039904b35",
  measurementId: "G-N2235GQ1G6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the 'Products' node
const sareeRef = ref(database, 'Products');

var productsListContainer = document.getElementById('products-list1');

// Fetch and display data from Firebase
onValue(sareeRef, function (snapshot) {
  // Clear existing content
  productsListContainer.innerHTML = '';

  // Loop through each product in the snapshot
  snapshot.forEach(function (productSnapshot) {
    var product = productSnapshot.val();

    // Create HTML elements to display product information
    var productElement = document.createElement('div');
    productElement.className = 'column item';

    // Customize this part based on your actual data structure
    productElement.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <!--<p>ID: ${product.id}</p>-->
            <p>${product.description}</p>
            <h4>Price: ${product.price}</h4>
            <div class="column d-flex"> 
              <button class="cartbutton">Add To Cart <i class="fa-solid fa-plus"></i></button>
              <button class="buy">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
    `;
    // Append the product element to the container
    productsListContainer.appendChild(productElement);
  });
});