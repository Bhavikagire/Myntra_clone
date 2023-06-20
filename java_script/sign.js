document.querySelector("#wishlist").addEventListener("click", function(){
    window.location.href="wishlist.html"
    })

    document.querySelector("#bag").addEventListener("click", function(){
        window.location.href="cart.html"
        })

        
        // document.querySelector("form").addEventListener("submit", function(){
            
        //     let mobile = document.querySelector("#mobile")
        //     if(mobile.length === 10){
        //         window.location.href="productpage.html"
                
        //     }
        //     else{
                
        //         // alert("signup succesfull")
        //     }
        // })


        let form = document.querySelector("form");
let signupData=JSON.parse(localStorage.getItem("signup-data"))||[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        name:form.name.value,
        password:form.password.value,
        confirmPassword:form.password2.value
    }
    let flag=true;
    signupData.forEach((elem)=>{
        if(elem.username!=obj.username){
            flag=false;
        
        }

    });
    if(obj.password.length<8){
        alert("Password length should be above 7")
    }else{
        if(flag==false){
            alert("username already registered");
        };
        
        
        if(obj.password!=obj.confirmPassword){
            alert("Password not matched");
        }
        
        else{
            signupData.push(obj);
            localStorage.setItem("signup-data",JSON.stringify(signupData));
            // alert("Sign Up successfully");
            window.location.href="login.html";
        }
    }


    

});
            
