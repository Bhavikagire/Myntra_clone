document.querySelector("#home").addEventListener("click",function(){
    document.querySelector("#home").style.color = "#ff3f6c"
   
    document.querySelector("#home").style.box = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    
    document.querySelector("#work").style.color = "black"
})

document.querySelector("#work").addEventListener("click",function(){
    document.querySelector("#work").style.color = "#ff3f6c"
   
    document.querySelector("#work").style.box = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    document.querySelector("#home").style.color = "black"
})

document.querySelector("#placeorder").addEventListener("click",function(){
    
        window.location.href = "payment.html"
    
   
})