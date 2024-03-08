
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
    // console.log(table)
    addToCartMatchedItems.map((element)=>{
        table.insertAdjacentHTML("beforeend",`
            <tr>
                <td>
                    <img src=${element.image} alt="" />
                </td>
                <td>
                    <p>${element.title}</p>
                </td>
                <td>1</td>
                <td class="price">${element.price}</td>
            </tr>
        `)      
    })



    let price = document.querySelectorAll(".price")
    let priceValue = price.innerHTML
    console.log(priceValue, "priceValue");
    // let price = [1,2,3,4,5,6,7,8,9,0]
    let totalPriceCalculation = price.forEach((element)=>{
        let priceSingle = element.innerHTML;
        // console.log(priceSingle, "priceSingle");

        let grandTotal = 0;

        grandTotal = grandTotal + Number(priceSingle)

        // console.log(grandTotal, "grandTotal");


    })
    console.log(totalPriceCalculation, "totalPriceCalculation");
})
