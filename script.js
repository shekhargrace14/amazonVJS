fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    let productsRow = document.querySelector(".productsRow");
    data.map((value,index)=>{
        productsRow.insertAdjacentHTML("beforeend",`
        <div class="column card">
        <div class="imgBox">
            <img src=${value.image} alt="">
        </div>
        <div class="info">
            <h3>${value.title}</h3>
            <p class="description"> ${value.description}</p>
            <p class="dicount">${value.price}</p>
            <p class="price">${value.price}</p>
            <button>Add to cart</button>
        </div>
    </div>
        `)
        // console.log(value.title)
    })
})