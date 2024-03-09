let header = document.querySelector("header")


fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    // console.log(data);
    let productsRow = document.querySelector(".productsRow");
    data.map((value,index)=>{
        productsRow.insertAdjacentHTML("beforeend",`
        <div class="column card">
            <a href="./singleProductPage.html" id=${value.id}>
                <div class="column cardBody">
                    <div class="imgBox">
                        <img src=${value.image} alt="">
                    </div>
                    <div class="info">
                        <p class="productTitle">${value.title}</p>
                        <p class="description"> ${value.description}</p>
                        <div class="price d-flex ">
                            <p class="discount">$ ${(value.price+ 5).toFixed(2) }</p>
                            <p class="CurrentPrice">$ ${value.price.toFixed(2)}</p>
                        </div>


                    </div>
                </div>
            </a>
        </div>
        `)
        // console.log(value.title)
    })
    let card = document.querySelectorAll(".card")
    console.log(card, "card");
    card.forEach((item,index)=>{
        item.addEventListener("click", ()=>{
            let itemID = item.firstElementChild.id
            console.log(itemID, "card has been clicked")
            localStorage.setItem("singleProductPage",itemID)
        })
    })
})