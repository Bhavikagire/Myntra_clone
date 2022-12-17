document.querySelector("#wishgo").addEventListener("click", function(){
    window.location.href="wishlist.html"
    })

    document.querySelector("#bag").addEventListener("click", function(){
        window.location.href="cart.html"
        })
        document.querySelector("#coupon").addEventListener("click", function(){
            document.querySelector("#masai30").style.display = "block"
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

        

        let remove = document.createElement("button")
        remove.setAttribute("id","remove")
        remove.textContent = "Remove"
        remove.addEventListener("click",function(){
            cartitemmyntra.splice(i,1)
                localStorage.setItem("myntracart",JSON.stringify(cartitemmyntra))
                window.location.reload()
        })
       

       

        div.append(image, productname, brandname, price,add,qtys,rem,remove)
        document.querySelector("#append").append(div)

        let totalcost = 0
let total = document.querySelector("#total")

data.forEach(function(el,i){
    totalcost += (el.price*el.qty)
})
total.textContent = '₹' + " "+totalcost

   
    

    document.querySelector(".button2").addEventListener("click",function(){
      
    if(document.querySelector(".enter-code>input").textContent != "masai30"){
        console.log(document.querySelector(".enter-code>input").textContent)
        totalcost = Math.floor(totalcost-totalcost*0.3)
        total.textContent = '₹' + " "+totalcost
        console.log(totalcost)
    
    }
    else{
        console.log("yes")
       
           
    }
       
        
    })

})
}








