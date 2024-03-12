let displayProduct = async()=>{
    let product = await fetch("https://fakestoreapi.com/products");
    let finalProduct = await product.json();
    console.log(finalProduct)
    let productsRow = document.querySelector(".productsRow");

    let category =  document.querySelector(".category")
    let allCat = [];
    finalProduct.forEach((element)=>{
        if(!allCat.includes(element.category)){
            category.innerHTML+=`
                <input type="checkbox" value="${element.category}">${element.category}</input> <br>
            `
            allCat.push(element.category)
        }
    })
    finalProduct.map((value,index)=>{
        productsRow.insertAdjacentHTML("beforeend",`
        <div class="column card">
            <a href="./singleProductPage.html" id=${value.id}>
                <div class="column cardBody">
                    <div class="imgBox">
                        <img src=${value.image} alt="">
                    </div>
                    <div class="info">
                        <p class="productTitle">${value.title}</p>
                        <p class="productCategory">${value.category}</p>
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
}

displayProduct()