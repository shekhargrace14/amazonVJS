

// product filter stats here 
let productsRow = document.querySelector(".productsRow");
let category =  document.querySelector(".FilterCategory")
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
   
}

displayProduct()

let categoryFilter=()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']")
    let checkData = [];
    checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value);
            // console.log(e.value)
        }
    })
    displayProduct(checkData)
    // console.log(checkData)
// /

}
// product filter ends here 

// productSlider start here 

// fetch("https://fakestoreapi.com/products")
fetch("./json/productApiLocal.json")
.then((resolve)=> resolve.json())
.then((data)=>{
    // console.log(data)
    let carousel = document.querySelector(".productSliderCarousel")
    // console.log(carousel)
    data.map((value)=>{
        carousel.insertAdjacentHTML("beforeend",`
            <div class="column productSliderCard">
                <div class="imgBox">
                    <img src=${value.image} alt="">

                </div>                   
                <div class="info">
                    <p class="rating"> ${value.rating.rate} | ${value.rating.count} </p>
                    <h4 class="productTitle">${value.title}</h4>

                    <div class="price d-flex ">
                    <p class="CurrentPrice">$ ${value.price.toFixed(2)}</p> &nbsp; &nbsp;
                    <p class="discount">$ ${(value.price+ 10).toFixed(2) }</p>
                    
                    </div>
                </div>
                <div >
                    <a href="./singleProductPage.html" id=${value.id}>
                        <button class="btn-primary" >Quick Shop</button>
                    </a>

                </div>
            </div>
        `)
    })


    let productSliderCard = document.querySelectorAll(".productSliderCard")
    let cardWidth = document.querySelector(".productSliderCard").getBoundingClientRect().width
    // const cardWidth = card.getBoundingClientRect()
    // let cardWidth = card.offsetWidth;
    // console.log(productSliderCard)
    // console.log(cardWidth)

    let arrows = document.querySelectorAll(".arrow")

    arrows.forEach((btn)=>{
        // console.log(btn)
        btn.addEventListener("click",()=>{
            // console.log(btn.id)
            carousel.scrollLeft += btn.id === "left" ? -cardWidth -8 : + cardWidth +8;

        })
    })



})

// productSlider ends here 

// product filter starts
// let  
// product filter ends