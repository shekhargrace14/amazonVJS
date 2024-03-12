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
                <td class="image">
                    <img src=${element.image} alt=""/>
                </td>
                <td>
                    <p>${element.title}</p>
                </td>
                <td class="quantity">
                    <div class="quantity-box">
                        <span class="decrement" >-</span>
                        <span class="value">1</span>
                        <span class="increment" >+</span>
                        <span class="delete" id=${element.id} ><i class="fa-solid fa-trash"></i></span>
                    </div>
                </td>
                <td class="price"> $ ${ element.price.toFixed(2)}</td>
            </tr>
        `)    
    })
    // increment decrement start 
    let increment = document.querySelectorAll(".increment");
    // console.log(increment)
    let value = document.querySelectorAll(".value");
    // console.log(value)
    increment.forEach((element,index)=>{
        element.addEventListener("click",()=>{
            let newValue = value[index].innerHTML;
            // console.log(initValue,"initValue")
            newValue++;
            value[index].innerHTML = newValue;
            let price = document.querySelector(".price").innerHTML
            console.log(price,"price")
            let priceAfterIncrement = newValue * price
            price.innerHTML = priceAfterIncrement
            console.log(priceAfterIncrement,"priceAfterIncrement");
        })      
    })

    let decrement = document.querySelectorAll(".decrement");
    // console.log(decrement)
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
    // delete item starts
    let deleteBtn = document.querySelectorAll(".delete");
    // console.log(deleteBtn, "deleteBtn")
    deleteBtn.forEach((element,index)=>{
        element.addEventListener("click", ()=>{
       
            let addToCartItemsBeforeDelete =  JSON.parse(localStorage.getItem("addToCartItems"))

            let itemToRemove = element.id
            let addToCartItemsAfterDelete = [ ]
            addToCartItemsAfterDelete = addToCartItemsBeforeDelete.filter(item=>item !== itemToRemove)
            localStorage.setItem("addToCartItems",JSON.stringify(addToCartItemsAfterDelete) )

              // Remove the corresponding row from the table
            let tableRow = element.closest(".product")
            tableRow.remove();
            // updateCartTable()
        })
    })
    // delete item ends

    // function updateCartTable(){
    //     console.log("hello from updateCartTable ")


    // }

    // empty cart message starts
    let cartStatus = document.querySelector(".cartStatus");
    // console.log(cartStatus)
    // if(localStorage.getItem("addToCartItems") == []){
        // console.log(localStorage.getItem("addToCartItems"))
        cartStatus.classList.add = "displayNone"

    // }else{
        // cartStatus.classList.display = "block"
        cartStatus.classList.remove = "displayNone"
    // } 
    // empty cart message ends 
})