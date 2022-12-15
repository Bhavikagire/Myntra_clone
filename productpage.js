fetch('https://636cdff391576e19e317be7a.mockapi.io/products')
.then((res) => res.json())
	.then((res) => {
        console.log(res)
        
    displaydata(res)
    })
	.catch((err) => console.log(err))

    function displaydata(data){
        document.querySelector("#append").innerHTML=null
        data.forEach(function(el){
           

            let div = document.createElement("div")

            let image = document.createElement("img")
            image.setAttribute("src",el.image)

            let productname = document.createElement("span")
            productname.innerText = el.name

            let brandname = document.createElement("h3")
            brandname.innerText = el.brand

            

            let price = document.createElement("span")
            price.innerText = '₹' +el.price 


            let wish = document.createElement("img")
            wish.src = "https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
            wish.setAttribute("id","wish")

            wish.addEventListener("click", function(){
                wish.src = "https://img.freepik.com/free-vector/heart_53876-25531.jpg"

                let wishlistdata = JSON.parse(localStorage.getItem("wishlist"))
                if(wishlistdata == null)
                wishlistdata = []
                let already = false;
                for(let i=0;i<wishlistdata.length;i++){
                    if(wishlistdata[i].links === el.links){
                       already = true;
                       break;
                    }
                }
                if(already === true){
                    alert("product already in wishlist")
                }
                else{
                    wishlistdata.push(el)
                    localStorage.setItem("wishlist",JSON.stringify(wishlistdata))
                    alert("product added to wishlist")
                }
              
            })

            let addcart = document.createElement("button")
            addcart.innerText = "Add To Cart"
            addcart.setAttribute("id","addcart")
            addcart.addEventListener("click",function(){
                let cartitemmyntra = JSON.parse(localStorage.getItem("myntracart"))
                if(cartitemmyntra == null)
                cartitemmyntra = []
                let alreadyct = false;
                for(let i=0;i<cartitemmyntra.length;i++){
                    if(cartitemmyntra[i].links == el.links){
                        alreadyct = true
                    }
                }
                if(alreadyct == true){
                    alert("product already in cart")
                }
                else{
                    cartitemmyntra.push({...el,qty:1})
                    localStorage.setItem("myntracart",JSON.stringify(cartitemmyntra))
                    alert("product added to cart")
                }
            })

            div.append(image,productname,brandname,price,wish,addcart)
            document.querySelector("#append").append(div)



           let apdiv = document.querySelector("#append")
        //    apdiv.style.display="flex";
           
        
      
        })
    }
  