document.querySelector("#wishlist").addEventListener("click", function(){
    window.location.href="wishlist.html"
    })

    document.querySelector("#bag").addEventListener("click", function(){
        window.location.href="cart.html"
        })


 let cartitemmyntra = JSON.parse(localStorage.getItem("myntracart"))
 displaydata(cartitemmyntra)
 
function displaydata(data) {

    document.querySelector("#append").innerHTML = null

    data.forEach(function (el,i) {


        let div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src", el.image)

        let productname = document.createElement("span")
        productname.innerText = el.name

        let brandname = document.createElement("h3")
        brandname.innerText = el.brand



        let price = document.createElement("p")
        price.innerText = '₹' + el.price

        let add = document.createElement("button")
        add.textContent = "+"
        add.addEventListener("click",function(){
           el.qty++
            localStorage.setItem("myntracart",JSON.stringify(cartitemmyntra))
            window.location.reload()
        })


        let qtys = document.createElement("span")
        qtys.textContent = el.qty

        let rem = document.createElement("button")
        rem.textContent = "-"
        rem.addEventListener("click",function(){
            if(el.qty<=1){
                cartitemmyntra.splice(i,1)
                localStorage.setItem("myntracart",JSON.stringify(cartitemmyntra))
                window.location.reload()
            }
            else{
                el.qty--
                localStorage.setItem("myntracart",JSON.stringify(cartitemmyntra))
                window.location.reload()
            }
           
         })

        

        

       

       

        div.append(image, productname, brandname, price,add,qtys,rem)
        document.querySelector("#append").append(div)




    })
    
    


}






