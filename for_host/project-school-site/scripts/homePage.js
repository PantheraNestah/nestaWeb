

const courseLinks=document.querySelector(".header__nav-drop-courses").children;

for(item of courseLinks){
    switch(item){
        case courseLinks[0]:
            item.addEventListener("click",()=>{
                document.querySelector(".scroll-container").style.height="50vh"
                document.getElementById("courses-default").style.display="block"
                document.getElementById("courses-curriculum").style.display="none"
            })
            break
        case courseLinks[1]:
            break
        case courseLinks[2]:
            item.addEventListener("click",()=>{
                document.querySelector(".scroll-container").style.height="70vh"
                document.getElementById("courses-default").style.display="none"
                document.getElementById("courses-curriculum").style.display="block"
            })
            break
        case courseLinks[3]:
            break
    }
}


//4 news page

const toggles=document.querySelectorAll(".more-news-toggle")
let toggled=false
for(let toggle of toggles){
    let tChildren=toggle.children
    tChildren[0].addEventListener("click",()=>{
    if(!toggled){
        console.log("clicked")
        tChildren[0].textContent="...Less"
        tChildren[1].style.display="block"
        toggled=true
    }
       else if(toggled){
            console.log("clicked")
            tChildren[0].textContent="...More"
            tChildren[1].style.display="none"
            toggled=false
        }
})}
