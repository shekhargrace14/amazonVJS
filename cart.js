async function showCart(){
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    // console.log(data)
    addToCartMatchedItems(data)
    return data
}
showCart()
async function addToCartMatchedItems(data){
    let addToCartItems = JSON.parse(localStorage.getItem("addToCartItems"))
    // console.log(addToCartItems)
    let addToCartMatchedItems = data.filter((element)=>{
        return addToCartItems.includes(element.id.toString())
    });
    // console.log(addToCartMatchedItems)

    let table = document.querySelector("table");
    let totalPriceArray = [];
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
                        <span class="quantityBtn " id="decrementBtn">-</span>
                        <span class="value">1</span>
                        <span class="quantityBtn " id="incrementBtn">+</span>
                    
                    </div>
                </td>
                <td class="price"> $ ${ element.price.toFixed(2)}</td>
                <td > <span class="deleteBtn" id=${element.id} ><i class="fa-solid fa-trash"></i></span></td>
            </tr>
        `)    
    })

    let value = document.querySelectorAll(".value")

    let price = document.querySelectorAll(".price")
    priceManagement(price)
    
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteAddToCartItems(deleteBtn)
    
    let incrementBtn = document.querySelectorAll("#incrementBtn")
    increment(incrementBtn ,value)
    
    let decrementBtn = document.querySelectorAll("#decrementBtn")
    decrement(decrementBtn ,value)

    // let quantityBtn = document.querySelectorAll(".quantityBtn")
    // quantity(quantityBtn, value)
}
addToCartMatchedItems()



function deleteAddToCartItems(deleteBtn){
    deleteBtn.forEach((element) => {
        element.addEventListener("click",()=>{

            // console.log(element)

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
        
    });
}

deleteAddToCartItems()


// function increment(incrementBtn, value){
//     console.log(incrementBtn, 'incrementBtn')
//     console.log(value)
//     incrementBtn.forEach((element,index)=>{
//         element.addEventListener("click", ()=>{
//             console.log(element, "clicked")
//             let newValue = value[index].innerHTML;
//             newValue++;
//             value[index].innerHTML = newValue
//         })
//     })
// }
// increment()

// function decrement(decrementBtn, value){
//     console.log(decrementBtn, 'incrementBtn')
//     console.log(value)
//     decrementBtn.forEach((element,index)=>{
//         element.addEventListener("click", ()=>{
//             console.log(element, "clicked")
//             let newValue = value[index].innerHTML;
//             if(newValue==0){
//                 return
//             }else{

//                 newValue--;
//                 value[index].innerHTML = newValue
//             }   
//         })
//     })
// }
// decrement()

// function quantity(quantityBtn, value ){
    // console.log(value)
    // quantityBtn.forEach((element, index)=>{
        // element.addEventListener("click",()=>{
            // let newValue = value[index].innerHTML
            // console.log(element.id)
            // console.log(newValue)

            // if(element.id=="increment"){
                // let newValue = value[index].innerHTML
                // console.log(element.id, "increment hai bhai")
                // newValue++
                // value[index].innerHTML = newValue
            // }else{
                // let newValue = value[index].innerHTML

                // console.log(element.id, "decrement hai bhai")
                // newValue--
                // value[index].innerHTML = newValue


            // }
        // })
    // })
// }

// quantity()

function priceManagement(price) {
    let grandTotal = 0; // Initialize grand total

    price.forEach((element, index) => {
        let initialPrice = parseFloat(element.innerText.replace('$', '')); // Get initial price
        let value = document.querySelectorAll('.value')[index]; // Corresponding quantity value
        let incrementBtn = document.querySelectorAll('#incrementBtn')[index]; // Corresponding increment button
        let decrementBtn = document.querySelectorAll('#decrementBtn')[index]; // Corresponding decrement button

        // Update price when quantity changes
        value.addEventListener('input', () => {
            let newValue = parseFloat(value.innerText); // Get the new quantity value
            let newPrice = initialPrice * newValue; // Calculate new price
            element.innerText = `$ ${newPrice.toFixed(2)}`; // Update price display
            updateGrandTotal(); // Update grand total
        });

        // Update price when increment button is clicked
        incrementBtn.addEventListener('click', () => {
            let newValue = parseFloat(value.innerText) + 1; // Increment quantity
            value.innerText = newValue; // Update quantity display
            let newPrice = initialPrice * newValue; // Calculate new price
            element.innerText = `$ ${newPrice.toFixed(2)}`; // Update price display
            updateGrandTotal(); // Update grand total
        });

        // Update price when decrement button is clicked
        decrementBtn.addEventListener('click', () => {
            let newValue = parseFloat(value.innerText) - 1; // Decrement quantity
            if (newValue >= 0) {
                value.innerText = newValue; // Update quantity display
                let newPrice = initialPrice * newValue; // Calculate new price
                element.innerText = `$ ${newPrice.toFixed(2)}`; // Update price display
                updateGrandTotal(); // Update grand total
            }
        });

        // Initial calculation of grand total
        grandTotal += initialPrice;
    });

    // Function to update grand total
    function updateGrandTotal() {
        grandTotal = 0; // Reset grand total
        price.forEach((element) => {
            grandTotal += parseFloat(element.innerText.replace('$', '')); // Add individual item prices to grand total
        });
        document.getElementById('grandTotal').innerText = `$ ${grandTotal.toFixed(2)}`; // Update grand total display
    }

    // Initial display of grand total
    updateGrandTotal();
}