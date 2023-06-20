document.querySelector("#wishlist").addEventListener("click", function(){
    window.location.href="wishlist.html"
    })
    document.querySelector("#bag").addEventListener("click", function(){
        window.location.href="cart.html"
        })

 let data = []
fetch('https://636cdff391576e19e317be7a.mockapi.io/products')
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        data = res
        displaydata(res)
    })
    .catch((err) => console.log(err))


function displaydata(data) {
    

    document.querySelector("#append").innerHTML = null

    data.forEach(function (el) {


        let div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src", el.image)

        let productname = document.createElement("span")
        productname.innerText = el.name

        let brandname = document.createElement("h3")
        brandname.innerText = el.brand



        let price = document.createElement("span")
        price.innerText = '₹' + el.price


        let wish = document.createElement("img")
        wish.src = "https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
        wish.setAttribute("id", "wish")

        wish.addEventListener("click", function () {
            wish.src = "https://img.freepik.com/free-vector/heart_53876-25531.jpg"

            let wishlistdata = JSON.parse(localStorage.getItem("wishlist"))
            if (wishlistdata == null)
                wishlistdata = []
            let already = false;
            for (let i = 0; i < wishlistdata.length; i++) {
                if (wishlistdata[i].links === el.links) {
                    already = true;
                    break;
                }
            }
            if (already === true) {
                alert("product already in wishlist")
            }
            else {
                wishlistdata.push(el)
                localStorage.setItem("wishlist", JSON.stringify(wishlistdata))
                alert("product added to wishlist")
            }

        })

        let addcart = document.createElement("button")
        addcart.innerText = "Add To Cart"
        addcart.setAttribute("id", "addcart")
        addcart.addEventListener("click", function () {
            let cartitemmyntra = JSON.parse(localStorage.getItem("myntracart"))
            if (cartitemmyntra == null)
                cartitemmyntra = []
            let alreadyct = false;
            for (let i = 0; i < cartitemmyntra.length; i++) {
                if (cartitemmyntra[i].links == el.links) {
                    alreadyct = true
                }
            }
            if (alreadyct == true) {
                alert("product already in cart")
            }
            else {
                cartitemmyntra.push({ ...el, qty: 1 })
                localStorage.setItem("myntracart", JSON.stringify(cartitemmyntra))
                alert("product added to cart")
                addcart.innerText = "In Cart"
                localStorage.setItem("myntracart", JSON.stringify(cartitemmyntra))
            }
        })

        div.append(image, productname, brandname, price, wish, addcart)
        document.querySelector("#append").append(div)



        let apdiv = document.querySelector("#append")
        //    apdiv.style.display="flex";


    })

}
    
    document.querySelector("#one").addEventListener("change", function (event) {
        console.log(event)
        let filterdproduct = data.filter(function (el) {
            return el.brand == "HRITIKA"

        })

        displaydata(filterdproduct)
        console.log(event)

    })

    document.querySelector("#two").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "ZIKARAA"
        })
        displaydata(filterdproduct)
        console.log(filterdproduct)

    })



    document.querySelector("#three").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "MARZIYAA"
        })
        displaydata(filterdproduct)

    })

    document.querySelector("#four").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "SATRANI"
        })
        displaydata(filterdproduct)

    })


    document.querySelector("#five").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "GRUBSTAKER"
        })
        displaydata(filterdproduct)

    })



    document.querySelector("#six").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "VISHNU WEAVES"
        })
        displaydata(filterdproduct)

    })

    document.querySelector("#seven").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "SAREE MALL"
        })
        displaydata(filterdproduct)

    })

    document.querySelector("#eight").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "GORGONE"
        })
        displaydata(filterdproduct)

    })

    document.querySelector("#nine").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            return el.brand == "GRIVA DESIGNER"
        })
        displaydata(filterdproduct)

    })



    document.querySelector("#priceone").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            
            if(el.price<299){
                return el
            }
    
            // return el.price == "273"
        })
        // console.log(filterdproduct)
        displaydata(filterdproduct)
    
    })


    document.querySelector("#pricetwo").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            
            if(el.price>=299 && el.price<599){
                return el
            }
    
            // return el.price == "273"
        })
        // console.log(filterdproduct)
        displaydata(filterdproduct)
    
    })


    document.querySelector("#pricethree").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            
            if(el.price>=599 && el.price<999){
                return el
            }
    
            // return el.price == "273"
        })
        // console.log(filterdproduct)
        displaydata(filterdproduct)
    
    })



    document.querySelector("#pricefour").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            
            if(el.price>=999 && el.price<1500){
                return el
            }
    
            // return el.price == "273"
        })
        // console.log(filterdproduct)
        displaydata(filterdproduct)
    
    })


    document.querySelector("#pricefive").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            
            if(el.price>=1500 && el.price<2500){
                return el
            }
    
            // return el.price == "273"
        })
        // console.log(filterdproduct)
        displaydata(filterdproduct)
    
    })



    document.querySelector("#pricesix").addEventListener("change", function () {

        let filterdproduct = data.filter(function (el) {
            
            if(el.price>2500){
                return el
            }
    
            // return el.price == "273"
        })
        // console.log(filterdproduct)
        displaydata(filterdproduct)
    
    })

    document.querySelector("select").addEventListener("change",function(){
        {
            let selected = document.querySelector("select").value
            if(selected == ""){
             displaydata(data)
            }
            else if(selected == "htl"){
             data.sort((a,b)=>b.price - a.price)
             displaydata(data)
            }
            else{
             data.sort((a,b)=>a.price - b.price)
             displaydata(data)
            }
           
         }
    })

    document.querySelector("#searchproducts").addEventListener("input",function(){
     let q = document.querySelector("#searchproducts").value
     console.log(q)
     let newdata = data.filter(function(el){
        return el.name.toLowerCase().includes(q.toLowerCase())
        if(document.querySelector("#searchproducts").value == ""){
            window.location.reload
         }

     })
     
    //  console.log(newdata)
      displaydata(newdata)
    
    })
    
   
    










