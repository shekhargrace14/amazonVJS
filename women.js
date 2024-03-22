
let productDiv = document.querySelector(".productRow");

let displayProduct= async ()=>{
    // productDiv.innerHTML= '';
    let product = await fetch("https://fakestoreapi.com/products")
    let finalProduct = await product.json();
        console.log(value)


    finalProduct.forEach((value) => {
        // console.log(value)

    });
}

displayProduct()