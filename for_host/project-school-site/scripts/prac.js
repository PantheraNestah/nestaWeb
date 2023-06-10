
let availabe=true
let list;

if(!localStorage.getItem("myList")){
    availabe=false
    localStorage.setItem("myList","")
}else{
    list=JSON.parse(localStorage.getItem("myList"))
    let output=document.querySelector(".output");
    let content=`<h4>${list[0]}</h4> <h4>${list[1]}</h4>`
    output.innerHTML=content
}
document.querySelector(".submitBtn").addEventListener("click", ()=>{
    let username=document.getElementById("name").value;
    let password=document.getElementById("pwd").value;
    if(availabe){
        
        list.push(username,password);
        list=JSON.stringify(list)
        localStorage.setItem("myList",list)
    }
    else if(!availabe){
        list=JSON.parse(localStorage.getItem("myList"))
        list.push(username,password)
        list=JSON.stringify(list)
        localStorage.setItem("myList",list)
    }
})
