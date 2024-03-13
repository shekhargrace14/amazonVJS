let productsRow = document.querySelector(".productsRow");
let category =  document.querySelector(".category")
let allCat = [];

let displayProduct = async(allCheckCat=[])=>{
    console.log(allCheckCat)
    productsRow.innerHTML = ''
    let product = await fetch("https://fakestoreapi.com/products");
    let finalProduct = await product.json();
    finalProduct.forEach((element)=>{
        if(!allCat.includes(element.category)){
            category.innerHTML+=`
            <input type="checkbox" onclick='categoryFilter()' value="${element.category}">${element.category}</input> <br>
            `
            allCat.push(element.category)
            // <input type="checkbox" onclick='categoryFilter("${element.category}")' value="${element.category}">${element.category}</input> <br>
        }
        if(allCheckCat.length==0){
            allCheckCat = allCat;
            console.log(allCheckCat)

        }

        if(allCheckCat.includes(element.category)){
            productsRow.innerHTML+=`
                <div class="column card">
                    <a href="./singleProductPage.html" id=${element.id}>
                        <div class="column cardBody">
                            <div class="imgBox">
                                <img src=${element.image} alt="">
                            </div>
                            <div class="info">
                                <p class="productTitle">${element.title}</p>
                                <p class="productCategory">${element.category}</p>
                                <p class="description"> ${element.description}</p>
                                <div class="price d-flex ">
                                    <p class="discount">$ ${(element.price+ 5).toFixed(2) }</p>
                                    <p class="CurrentPrice">$ ${element.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                `
                // console.log(value.title)
        }

    })
   
}

displayProduct()

let categoryFilter=()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']")
    let checkData = [];
    checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value);
            console.log(e.value)
        }
    })
    displayProduct(checkData)
    console.log(checkData)


}