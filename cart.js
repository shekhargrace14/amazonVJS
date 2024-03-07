
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
    console.log(addToCartMatchedItems, "addToCartMatchedItems")

    let table = document.querySelector("table");
    console.log(table)
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
                <td>${element.price}</td>
            </tr>


        `)
        
    })

})
