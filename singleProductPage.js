fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    let clickedId = localStorage.getItem("singleProductPage")
    let matchedId = data.find((item)=>{
        return item.id.toString() === clickedId;
    });
    // console.log( matchedId,"this is matchedId")
    
    if(matchedId){
        document.querySelector(".productTitle").innerHTML = matchedId.title;
        document.querySelector(".description").innerHTML = matchedId.description;
        document.querySelector(".discount").innerHTML = (matchedId.price + 5).toFixed(2);
        document.querySelector(".CurrentPrice").innerHTML = `$ ${matchedId.price.toFixed(2)}`;
        document.getElementById("imageUrl").src = matchedId.image;
        document.getElementById("addToCartProductId").id = matchedId.id;
        document.querySelector("#productId").id = matchedId.id;
    }
})

let addToCartBtn= document.querySelector(".addToCartBtn")

// console.log(addToCartBtn, "productId")

addToCartBtn.addEventListener("click", (e)=>{
    let addToCartProductIdArray = [];
    let addToCartProductId = e.target.id;

    addToCartProductIdArray = JSON.parse(localStorage.getItem("addToCartItems")) ?? []
    
    console.log(addToCartProductIdArray);

    addToCartProductIdArray.push(addToCartProductId)

    console.log("addToCartBtn clicked", e.target.id)

    localStorage.setItem("addToCartItems",JSON.stringify(addToCartProductIdArray))

})


