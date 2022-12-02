"use strict";

const fetchData=()=>{
    $("#overlay").classList.add("hidden");
    $("#modal").classList.add("hidden");

}
const fetchrender=()=>{$("#overlay").classList.remove("hidden");
$("#modal").classList.remove("hidden");}


localStorage.getItem("token") ?fetchData()  :fetchrender()



const usernameLoc= localStorage.getItem("username")
$("#show-btn").innerHTML=usernameLoc;
$("#userName").innerHTML=usernameLoc;
$("#show-btn").addEventListener("click", function () {
  $("#modal3").classList.remove("hidden");
  $("#overlay3").classList.remove("hidden");

});



$(".close-btn").addEventListener("click", function () {
    $("#modal3").classList.add("hidden");
    $("#overlay3").classList.add("hidden");
});

$(".btn-logout").addEventListener("click", function () {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    location.reload();
});

$(".btn-reg").addEventListener("click", function () {
    $("#modal").classList.add("hidden");
    $("#overlay").classList.add("hidden");
    $("#modal2").classList.remove("hidden");
    $("#overlay2").classList.remove("hidden");
  
  
  });
  $(".btn-log").addEventListener("click", function () {
    $("#modal2").classList.add("hidden");
    $("#overlay2").classList.add("hidden");
    $("#modal").classList.remove("hidden");
    $("#overlay").classList.remove("hidden");
  
  
  });


$(".bi").addEventListener("click", function() {
   $("#menu").classList.toggle("d-none");

});
$("#close").addEventListener("click", function() {
   $("#menu").classList.toggle("d-none");
});
const baseURL="https://samid.uz/v1/user/sign-in";
$("#login").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const username=$("#username").value.trim();
    const password=$("#password").value.trim();
    if(username.length===0 || password.length===0){
        alert('Please enter forms')
    }else{
        const response = await fetch(`${baseURL}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "username":username,
                "password":password
            })
        });
        const data=await response.json();
        if(data.code===1){
            alert(data.message);
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("username",data.data.username);
            fetchrender();
        console.log(data);
    }
   else{
        alert(data.message);
   }
}
})

const base="https://task.samid.uz/v1/user";

$("#register").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const userReg=$("#userReg").value.trim();
    const emailReg=$("#emailReg").value.trim();
    const passwordReg=$("#passwordReg").value.trim();
    
    if(userReg.length===0 || emailReg.length===0 || passwordReg.length===0){
        alert('Please enter forms')}
        else{
            const response=await fetch(`${base}/sign-up`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "username":userReg,
                    "email":emailReg,
                    "password":passwordReg
                })
            });
            const data=await response.json();
            if(data.code===1){
                alert(data.message);
                fetchData();
            console.log(data);
        }
        else{
            alert(data.message);
        }
    }

})

