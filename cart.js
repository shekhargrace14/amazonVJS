// console.log(JSON.parse(localStorage.getItem("addToCartItems")))
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    // console.log(data);
    let addToCartItems = JSON.parse(localStorage.getItem("addToCartItems"))
    // console.log(addToCartItems);
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
            <tr class="product">
                <td>
                    <img src=${element.image} alt="" />
                </td>
                <td>
                    <p>${element.title}</p>
                </td>
                <td class="quantity">
                    <button class="decrement" >-</button>
                    <span class="value">1</span>
                    <button class="increment" >+</button>
                </td>
                <td class="price">${element.price.toFixed(2)}</td>
            </tr>
        `)    
    })

    
    // increment decrement start 
    let increment = document.querySelectorAll(".increment");
    console.log(increment)

    let value = document.querySelectorAll(".value");
    console.log(value)

    

    
    
    
    increment.forEach((element,index)=>{

        element.addEventListener("click",()=>{
            let initValue = value[index].innerHTML; 
            console.log(initValue,"initValue")
            initValue++;
            value[index].innerHTML = initValue;
            // console.log(initValue,"initValue")
            // console.log(index,"element quantity")

        })      
    })

    let decrement = document.querySelectorAll(".decrement");
    console.log(decrement)

    decrement.forEach((element,index)=>{

        element.addEventListener("click",()=>{
            let initValue = value[index].innerHTML; 
            console.log(initValue,"initValue")
            if(initValue == 0 ){
                return
            }else{

                initValue--;
                value[index].innerHTML = initValue;
            }
            // console.log(initValue,"initValue")
            // console.log(index,"element quantity")

        })      
    })
    // increment decrement ends   

    

    // grandTotal starts here 
    let totalPrice = totalPriceArray.reduce((total, price)=>price+total,0)
    // console.log(totalPrice,"totalPrice")
    let grandTotal = document.querySelector(".grandTotal")
    // console.log(grandTotal,"grandTotal")
    grandTotal.insertAdjacentHTML("beforeend",`
        <tr>
            <td>Total</td>
            <td class="totalPRice">${totalPrice.toFixed(2)}</td>
        </tr> 
    `)  
    // grandTotal ends here 
    
})



