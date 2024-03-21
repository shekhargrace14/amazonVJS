fetch("https://fakestoreapi.com/products")
.then((resolve)=> resolve.json())
.then((data)=>{
    console.log(data)
    let carousel = document.querySelector(".carousel")
    console.log(carousel)
    data.map((value)=>{
        carousel.insertAdjacentHTML("beforeend",`
            <div class="column card">
                <div class="imgBox">
                    <img src=${value.image} alt="">

                </div>                   
                <div class="info">
                    <p class="rating"> ${value.rating.rate} | ${value.rating.count} </p>
                    <h4 class="productTitle">${value.title}</h4>

                    <div class="price ">
                    <p class="CurrentPrice">$ ${value.price.toFixed(2)}</p>
                    <p class="discount">$ ${(value.price+ 10).toFixed(2) }</p>
                    </div>
                </div>
                <div class="d-flex justify-center">
                    <a href="./singleProductPage.html" id=${value.id}>
                        <button class="btn-primary" >Quick Shop</button>
                    </a>

                </div>
            </div>
        `)
    })


    let card = document.querySelectorAll(".card")
    let cardWidth = document.querySelector(".card").getBoundingClientRect().width
    // const cardWidth = card.getBoundingClientRect()
    // let cardWidth = card.offsetWidth;
    console.log(card)
    console.log(cardWidth)

    let arrows = document.querySelectorAll(".arrow")

    arrows.forEach((btn)=>{
        console.log(btn)
        btn.addEventListener("click",()=>{
            console.log(btn.id)
            carousel.scrollLeft += btn.id === "left" ? -cardWidth -16 : + cardWidth +16;

        })
    })



})