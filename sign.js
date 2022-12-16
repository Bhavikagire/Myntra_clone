document.querySelector("#wishlist").addEventListener("click", function(){
    window.location.href="wishlist.html"
    })

    document.querySelector("#bag").addEventListener("click", function(){
        window.location.href="cart.html"
        })

        
        document.querySelector("form").addEventListener("submit", function(){
            
            let mobile = document.querySelector("#mobile")
            if(mobile.length === 10){
                window.location.href="productpage.html"
                
            }
            else{
                
                alert("signup succesfull")
            }
        })
            
