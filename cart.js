
// console.log(JSON.parse(localStorage.getItem("addToCartItems")))

fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    let addToCartItems = JSON.parse(localStorage.getItem("addToCartItems"))
    console.log(addToCartItems);
    let addToCartMatchedItems = data.filter((element)=>{
        return addToCartItems.includes(element.id.toString())
    });
    // console.log(addToCartMatchedItems, "addToCartMatchedItems")
    let table = document.querySelector("table");
    let totalPriceArray = [];
    // console.log(table)
    addToCartMatchedItems.map((element)=>{
        totalPriceArray.push(element.price)
        table.insertAdjacentHTML("beforeend",`
            <tr>
                <td>
                    <img src=${element.image} alt="" />
                </td>
                <td>
                    <p>${element.title}</p>
                </td>
                <td>1</td>
                <td class="price">${element.price.toFixed(2)}</td>
            </tr>
        `)      
    })
    let totalPrice = totalPriceArray.reduce((total, price)=>price+total,0)
    console.log(totalPrice,"totalPrice")
    let grandTotal = document.querySelector(".grandTotal")
    console.log(grandTotal,"grandTotal")

    grandTotal.insertAdjacentHTML("beforeend",`
        <tr>
            <td>Total</td>
            <td class="totalPRice">${totalPrice.toFixed(2)}</td>
        </tr>
    
    `)  
})
