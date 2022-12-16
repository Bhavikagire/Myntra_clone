document.querySelector("#wishlist").addEventListener("click", function(){
    window.location.href="wishlist.html"
    })

    document.querySelector("#bag").addEventListener("click", function(){
        window.location.href="cart.html"
        })


 let cartitemmyntra = JSON.parse(localStorage.getItem("wishlist"))
 displaydata(cartitemmyntra)
 
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

        // let minus = document.createElement("button")
        // add.textContent = "-"

        // let qty = document.createElement("button")
        // add.textContent = ""

        // let add = document.createElement("button")
        // add.textContent = "+"

       
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
            }
        })
       

        div.append(image, productname, brandname, price,addcart)
        document.querySelector("#append").append(div)




    })
    
    


}






