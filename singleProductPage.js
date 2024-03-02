fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    let clickedId = localStorage.getItem("singleProductPage")
    let matchedId = data.find((item)=>{
        return item.id.toString() === clickedId;
    });
    // console.log( matchedId,"this is matchedId")
    
    if(matchedId){
        // document.querySelector("#sc").innerHTML = matchedId.image;  
        document.querySelector(".productTitle").innerHTML = matchedId.title;
        document.querySelector(".description").innerHTML = matchedId.description;
        document.querySelector(".discount").innerHTML = matchedId.price + 5;
        document.querySelector(".CurrentPrice").innerHTML = matchedId.price;
        document.getElementById("imageUrl").src = matchedId.image;
        document.getElementById("imageUrl").alt = matchedId.id;
    }
})

let  
 = document.querySelector(".addToCartBtn")
let addToCartId = document.querySelector("img")
addToCartBtn.addEventListener("click", ()=>{
    console.log("addToCartBtn clicked")
    
})
// console.log(addToCartId,"addToCartId")
