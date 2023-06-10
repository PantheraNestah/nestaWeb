//accepting user inputs
/*let username=window.prompt("whats your name?");
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML="Hello "+ username;
}*/


//Type conversion:-
//--all inputs from user are strings. typeof variable gives data type of a variable
//-- x=Number("3.14")->converts string to number. String(...), Boolean(...)
/*let count=0;
document.getElementById("decreaseBtn").onclick=function(){
    count-=1;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("increaseBtn").onclick=function(){
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
}*/


//STRING METHODS
let username="Bro code"
let firstName;
let lastName;

firstName=username.slice(0,3)
lastName=username.slice(4)
firstName=username.slice(0,username.indexOf(" "))
lastName=username.slice(username.indexOf(" ") + 1);

//METHOD CHAINING
username="bro";
let lettet=username.charAt(0).toUpperCase().trim();

//CHECKED PROPERTY OF CHECK BOXES AND RADIO BUTTONS
document.getElementById("myCheckBox").checked;{};  

//THE SWITCH STATEMENT
let grade ='A';

switch(grade){
    case "A": 
        console.log("You did great");
        break;
    case "B":
        console.log("You did good");
        break;
}

//TERNARY OPERATOR ---Shortcut for an if/else statement
/*----takes 3 operands -condition
                       -expression if true
                       -expression if false
                       
   condition ? exprIfTrue : exprIfFalse
    eg:- function checkWinner(win){
        win ? console.log("YOU WON") : console.log("YOU LOSE")
    }
   */


//VAR | LET
/* let variables are limited to a block scope
    var variables are limited to a function */

/* .toLocaleString(locale,{options})
    myNum=myNum.toLocaleString(undefined, {style:"units", unit:"celcius"}) style can be currency(dollars, eur), percent

*/


/*Arrays    
    array.push("item to add at end")
    array.pop()--remove item at end
    array.unshift("item to add at beginning")
    array.shift()--remove item at beginning

    SPREAD OPERATOR:-

    let class1=["patrick","sandy"];
    let class2=["red","blue","green"]

    class1.push(..class2);
*/


//REST PARAMETERS:- indefinite number of parameters
    /* 
        function sum(...numbers){
            let total=0;
            for(let number of numbers){
                total+=number;
            }
            return total;
        }
    */


//CALLBACKS:- passing function as argument to another function
/* 
    let total=sum(2,3);
    displayConsole(total);
    
    function displayConsole(output){
        console.log(output);
    }
    function sum(x,y){
        let result=x+y;
        return result;
    }
    function displayDom(output){
        document.getElementById("myLabel").innerHTML=output;
    }
    
    */   
   
//array.forEach():-
    /*
        let students=["patrick", "fred", "John"];
        students.forEach(capitalize); ---does it for each array element

        function capitalize(element, index, array){
            array[index] = element[0].toUpperCase() + element.substring(1);
        }
    */


//array.map() --executes a provided callback funtion once for each array element and creates a new array
/* 
    let numbers=[1,2,3,4];
    let squares=numbers.map(square);

    function square(element){
        return Math.pow(element,2)
    }

*/  

//array.filter():-creates a new array of all elements that pass the test provided by a function
/* 
    let ages=[18,16,21,20];
    function checkAge(element){
        return element>=18;
    }
    let adults=ages.filter(checkAge); --an array of ages >=18
*/

//array.reduce()--reduces an array into a single value
/*
    let prices=[5,15,10,25]

    function checkOut(total, element){
        return total+element;
    }

    let total=prices.reduce(checkOut)
*/

//sorting an array
/*  let grades=[100,50,90,40,80]
    function descendingSort(x,y){
        return y - x;                   --sort in descending order
    }

    function ascendingSort(x,y){
        return x - y;                   --sort in ascending order
    }
    grades=grades.sort(descendingSort);
*/

//function expression :--function without name(anonymous function)-helps avoid polluting the global scope with names.(write it n forget it)
/* 
    const greetings=function(){
        console.log("Hello")
    }
    greetings();--invoke it

    document.getElementById("myBtn").onclick=function(){
        //code here
    }
*/

//arrow function(=>):--compact alternative to a traditional function expression
/* 
    const greetings=function(){
        console.log("Hello")
    }                                 --traditional function expression
    greetings();--invoke it

    cons greeting=(username)=>{console.log(`Hello ${username}`);}    --arrow function expression
    greeting("bro");        --no function keyword and return statement in declaration
    
    let grades=[100,60,80,40,75]
    grades.sort(function(x,y){
        return y-x;                 --function expression
    });

    grades.sort((x,y)=>y-x);
    grades.forEach((element)=>console.log(element));

*/

//shuffling elements of an array
/* 
    let cards=["A","2","3","4","5","6","7","8","9","10","J","K","Q"]
    shuffle(cards);
    function shuffle(array){
        let currentIndex=array.length;

        while(currentIndex!=0){
            let randomIndex=Math.floor(Math.random()*array.length);
            currentIndex-=1;

            let temp=array[currentIndex];
            array[currentIndex]=array[randomIndex];
            array[randomIndex]=temp;
        }
        return array;
    }
*/


//map :-object that holds key-value pairs of any data type
/* 
    const store=new Map([
        ["t-shirt",20]
        ["socks",30]
    ])

    store.forEach((value,key)=>console.log(`${key} $${value}`));

    store.get("t-shirt")
    store.set("hat",40)
    store.delete("hat")
    store.has("hat")--return boolean
*/

//OBJECTS
/* 
    const car={
        model:"mustang",
        color:"red"

        drive:function drive(){
            console.log("drive the car")
        }
    }

    car.model;
    car.drive();


    the this keyword:-
    const car={
        model:"mustang",
        color:"red"

        drive:function drive(){
            console.log(`You drive the ${this.model}`)
        }
    }
*/

//classes= blueprint for creating objects define what properties and methods they have use a constructor for unique properties
/* 
    class Player{

        score=0;
        pause(){
            console.log("You paused the game")
        }
    }
    const player1=new Player();

    ---constructors----accepts arguments and assigns properties
    class Students{
        constructor(name,age,gpa){
            this.name=name;
            this.age=age;
            this.gpa=gpa;

        }
        study(){
            console.log(`${this.name} is studying`)
        }
    }

    const stud1=new Student("sandy", 27, 4.0);

    static variable=value; :--belongs to class.can be incremented in the constructor.accessed by ClassName.variable

    -----class inheritance-----
    class Animal{
        alive=true;
        eat(){
            console.log(`This ${this.name} eats`)
        }
    }
    class Rabbit extends Animal{  --inherits from animal class
        name="rabbit"
        run(){
            console.log(`This ${this.name} is running`);
        }
    }
    Rabbit.eat();


    ----the super keyword-----
        Refers to the parent class. commonly used to invoke constructor of a parent class
        
        class Parent{
            constructor(name, age){
                this.name=name;
                this.age=age;
            }
        }
        class Child extends Parent{
            constructor(name,age,runspeed){
                super(name,age);            --pass arguments to the parent class' contructor
                this.runspeed=runspeed;
            }
        }

        -----getters and setters-----a getter binds an object property to a function when that property is accessed...a setter 
        binds an object property to a function when that property os assigned a value
        class Car{
            constructor(power,tank){
                this._power=power;  --underscore denotes a protected property
                this._tank=tank;
            }
            get power(){
                return `${this._power}hp`
            }
            set tank(value){
                this._tank=value;
            }
        }

        let car=new Car(400);
        console.log(car.power)

        #objects can be passed to a function by simply passing the name of the object
*/
//anonymous objects:--
/* 
    class Card{
        constructor(value,suit){
            this.value=value;
            this.suit=suit;
        }
    }
    let cards=[new Card("A","Hearts"),
                new Card("A" "Spreads")
            ]
*/

//errors
/* 
    try{
        console.log();
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("this always executes")
    }

    if(isNaN(x)) throw "that wasn't a number"
*/

//setTimeout()
/* 
    function firstMessage(){
        alert("buy this course")
    }

    setTimeout(firstMessage, 5000) --invokes a function after a given number of miliseconds.Returns the id of the element
    clearTimeout()


    setInterval method:- invokes a function after a given time repeatedly
*/

//date objects
/* 
    date=date.toLocaleString();
    let year=date.getFullYear()/getMonth()/getHours()/getDate();
*/


//DOM MANIPULATION WITH JAVASCRIPT
/* 
    let element=document.body;
    let child=element.lastElementChild
    element.nextElementSebling,element.previousElementSebling,.firstElementChild

    let child=element.children[index of specific child] --array has no forEach method

    let child=Array.from(element.children)
    children.forEach(child=>child.style.backgroundColor="light green")
    element can have a parent, child and siblings


    ------creating a html element-------
    const nameTag=document.createElement("h1");
    nameTag.innerHTML="bRO"    ----textContent is preferable than innerHTML

    document.body.append(nameTag)
    const myList=document.querySelector("#fruit");
    const listItem=document.createElement("li")
    myList.append(listItem)--add at the end , .prepend(listItem)--add at the beginning

    myList.insertBefore(listItem, myList.getElementsByTagName("li")[index of element to add item before])

    ------changing css properties-------
    const title=document.getElementById("myTitle");
    title.style.css-property eg:- title.style.backgroundColor="rgb( , , )"
    title.style.color="rgb()"
    title.style.fontFamily="consolas"
    title.style.textAlign="center"
    title.style.display="block"
*/

//EVENTS
/* 
    buttons:-
        const element=document.getElementById("myBtn")
        element.onclick=functionToInvokeOnClick
        element.onload
        element.onchange
        element.onmouseover=
        element.onmouseout
        element.onmousedown

eventListener
.addEventListener(event,function,useCapture) --can add many event listeners to one element

const innerDiv=document.getElementById("innerDiv");
innerDiv.addEventListener("mouseover",changeRed)

function changeRed(){
    innerDiv.style.backgroundColor="red";
}
the usecapture argument is used to set preference on which element to handle event the first if they are 
more than one in the same space. usecapture value can be either true of false
*/


//showing and hiding elements
/* 
    const myBtn=document.querySelector("#myBtn");
    const myImg=document.querySelector("#myImg");
    myBtn.addEventListener("click",()=>{
        if(myImg.style.display=="none"){
            myImg.style.display="block"  --using visibility instead of display will allow the space for the image to be reserved
        }
        else{
            myImg.style.display="none"
        }
    })
*/


//listening keyPresses
/* 
    const myDiv=document.getElementById("myDiv");
    window.addEventListener("keydown",move);
    function move(event){

        switch(event.key){
            case "ArrowDown":
                y+=5;
                myDiv.style.top=y+"px";
                break;

        }
    }
*/

//animations
/* 
    const myBtn=document.getElementById("myBtn");
    const myAnimation=document.getElementById("myDiv");

    myBtn.addEventListener("click",begin);
    function begin(){
        let tineId=null;
        let x=0;
        let y=0;

        timeId=setInterval(frame, 5);

        function frame(){
            if(y>=200){
                clearInterval(timerId)
            }
            else{
                y+=1;
                myAnimation.style.top=y+"px";
            }
        }
    }
*/

//Canvas api


//Window object:--
/* 
    
*/

  /*  if(this.clickElem.innerText.innerText==="Year 1"){
                        if(this.baseElem.children[1].children[0].children[0].children[0].innerText=="Semester 1"){
                            console.log(this.baseElem.children[1].children[0].children[1])
                        }
                    } */
