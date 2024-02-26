fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    let productsRow = document.querySelector(".productsRow");
    data.map((value,index)=>{
        productsRow.insertAdjacentHTML("beforeend",`
        <a href="./singleProductPage.html">
            <div class="column card">
                <div class="imgBox">
                    <img src=${value.image} alt="">
                </div>
                <div class="info">
                    <p class="productTitle">${value.title}</p>
                    <p class="description"> ${value.description}</p>
                    <div class="price d-flex ">
                        <p class="discount">$ ${value.price + 6}</p>
                        <p class="CurrentPrice">$ ${value.price}</p>
                    </div>
                    <div class="buttonDiv">
                        <button class="btn-primary">Add to cart</button>
                    </div>

                </div>
            </div>
        </a>
        `)
        // console.log(value.title)
    })
})