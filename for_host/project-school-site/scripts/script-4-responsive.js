let allCourses={
    Year1:{
        Semester1:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ],
        Semester2:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ]
    },
    Year2:{
        Semester1:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ],
        Semester2:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ]
    },
    Year3:{
        Semester1:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ],
        Semester2:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ]
    },
    Year4:{
        Semester1:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ],
        Semester2:[
            "Data Structures and algorithms"
            ,"Object Oriented Programming"
            ,"Systems Programming I"
            ,"Calculus II"
            ,"Operating Systems I"
            ,"Introduction to Cyber Security"
        ]
    }
}

const courseLinks=document.querySelector(".header__nav-drop-courses").children;

for(item of courseLinks){
    switch(item){
        case courseLinks[0]:
            item.addEventListener("click",()=>{
                document.getElementById("courses-default").classList.toggle("d-flex",true)
                document.getElementById("courses-default").classList.toggle("d-none",false)
                document.getElementById("courses-registration").classList.toggle("d-flex",false)
                document.getElementById("courses-registration").classList.toggle("d-none",true)
                document.getElementById("courses-curriculum").classList.toggle("d-flex",false)
                document.getElementById("courses-curriculum").classList.toggle("d-none",true)
            })
            break
        case courseLinks[1]:
            item.addEventListener("click",()=>{
                document.getElementById("courses-default").classList.toggle("d-none",true)
                document.getElementById("courses-default").classList.toggle("d-flex",false)
                document.getElementById("courses-curriculum").classList.toggle("d-flex",false)
                document.getElementById("courses-curriculum").classList.toggle("d-none",true)
                let reg=document.getElementById("courses-registration")
                reg.classList.toggle("d-flex",true)
                reg.classList.toggle("d-none",false)
                let sessionYear="Year1"
                let sess="Semester1"
                reg.innerHTML=`
                    <div class="d-flex flex-column">
                        <h3>Units Registration</h3>
                        <p>For the ${sessionYear} ${sess} session</p>
                        <section class="d-flex flex-column justify-content-center">
                            <span>
                                <input id="unit1" type="checkbox">
                                <label for="unit1">${allCourses[sessionYear][sess][0]}</label>
                            </span>
                            <span>
                                <input id="unit1" type="checkbox">
                                <label for="unit1">${allCourses[sessionYear][sess][1]}</label>
                            </span>
                            <span>
                                <input id="unit1" type="checkbox">
                                <label for="unit1">${allCourses[sessionYear][sess][2]}</label>
                            </span>
                            <span>
                                <input id="unit1" type="checkbox">
                                <label for="unit1">${allCourses[sessionYear][sess][3]}</label>
                            </span>
                            <span>
                                <input id="unit1" type="checkbox">
                                <label for="unit1">${allCourses[sessionYear][sess][4]}</label>
                            </span>
                            <span>
                                <input id="unit1" type="checkbox">
                                <label for="unit1">${allCourses[sessionYear][sess][5]}</label>
                            </span>
                        </section>
                        <button class="btn mt-5 col-3 text-center" style="background-color:rgba(19,6,25,0.9);color:rgba(255,255,255,0.9);">Submit</button>
                    </div>
                `
            })
            break
        case courseLinks[2]:
            item.addEventListener("click",()=>{
                document.getElementById("courses-default").classList.toggle("d-none",true)
                document.getElementById("courses-default").classList.toggle("d-flex",false)
                document.getElementById("courses-registration").classList.toggle("d-flex",false)
                document.getElementById("courses-registration").classList.toggle("d-none",true)
                document.getElementById("courses-curriculum").classList.toggle("d-flex",true)
                document.getElementById("courses-curriculum").classList.toggle("d-none",false)
            })
            break
        case courseLinks[3]:
            break
    }
}


class YearToggle{
    toggled=false
    semToggled=false

    constructor(clickElem,baseElem){
        this.clickElem=clickElem
        this.baseElem=baseElem
    }
    toggle(){
        let year=this.clickElem.children[0].innerText
        
        switch(year){
            case "Year 1":
                year="Year1"
                break
            case "Year 2":
                year="Year2"
                break
            case "Year 3":
                year="Year3"
                break
            case "Year 4":
                year="Year4"
                break
        }
        
        let dropSem=this.baseElem.children[1]
        this.clickElem.addEventListener("click",()=>{
            console.log(year)
            dropSem.classList.toggle("d-none")
        })
        for(let item of this.baseElem.children[1].children){
            item.children[0].addEventListener("click",()=>{
                let sem=item.children[0].children[0].innerText
                switch(sem){
                    case "Semester 1":
                        sem="Semester1"
                        break
                    case "Semester 2":
                        sem="Semester2"
                        break
                }
                console.log(sem)
                let unitsContainer=item.children[1]
                unitsContainer.classList.toggle("d-none")
                for(let yr in allCourses){
                    let courseList
                    if(yr==year){
                        for(let session in allCourses[yr]){
                            if(session==sem){
                                courseList=`
                                <ul">
                                    <li>${allCourses[yr][session][0]}<li>
                                    <li>${allCourses[yr][session][1]}<li>
                                    <li>${allCourses[yr][session][2]}<li>
                                    <li>${allCourses[yr][session][3]}<li>
                                    <li>${allCourses[yr][session][4]}<li>
                                    <li>${allCourses[yr][session][5]}<li>
                                </ul>`
                                
                            }
                        }
                        unitsContainer.innerHTML=courseList
                    }
                }
            })
        }
    }
    isItToggled(){
        console.log(this.semToggled)
    }   
}
let yearElems=document.querySelectorAll(".section__div-year")

for(elem of yearElems){
    child=elem.children[0].children[0]
    baseObject=new YearToggle(child,elem);
    baseObject.toggle()
}
