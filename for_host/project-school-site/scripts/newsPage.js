

class HandleNews{
    //array to store topics -> //click events on prev and next
     
    constructor(){
        this.newsTopics=Array.from(document.querySelectorAll(".body__section__div-category"))
        this.activeTopic=document.getElementById("newsTitle")
        this.readArea=document.getElementById("newsStory")
        this.pageScrolls=document.getElementById("pagePrevNext")
    }
    //later on include functions fetching news as class methods to be called inside handleReadArea method
    
    handleReadArea(){
        let counter=0
        this.activeTopic.innerHTML=this.newsTopics[0].children[0].children[1].innerHTML
        this.readArea.innerHTML=this.newsTopics[0].children[1].children[0].innerHTML
        for(const elem of this.pageScrolls.children){
            elem.addEventListener("click",()=>{
                if(elem==this.pageScrolls.children[0]){
                    for(let item of this.newsTopics){
                        if(this.activeTopic.innerHTML==item.children[0].children[1].innerHTML){
                            counter=this.newsTopics.indexOf(item)
                            if(counter!=0){
                                this.activeTopic.innerHTML=this.newsTopics[counter-1].children[0].children[1].innerHTML
                                this.readArea.innerHTML=this.newsTopics[counter-1].children[1].children[0].innerHTML
                                break
                            }
                        }
                    }
                }
                if(elem==this.pageScrolls.children[1]){
                    for(let item of this.newsTopics){
                        if(this.activeTopic.innerHTML==item.children[0].children[1].innerHTML){
                            counter=this.newsTopics.indexOf(item)
                            if(counter<this.newsTopics.length){
                                this.activeTopic.innerHTML=this.newsTopics[counter+1].children[0].children[1].innerHTML
                                this.readArea.innerHTML=this.newsTopics[counter+1].children[1].children[0].innerHTML
                                break
                            }
                        }
                    }
                }
            })
        }
    }
}

class HandleTopics{
    constructor(){
        this.briefs=document.querySelectorAll(".body__section__div-category")
    }
    handleSelectedTopic(){
        for(let topic of this.briefs){
            topic.children[1].children[1].addEventListener("click",()=>{
                document.getElementById("newsTitle").innerText=topic.children[0].children[1].innerText
                document.getElementById("newsStory").innerHTML=`<p>${topic.children[1].children[0].innerText}</p>`
            })
        }
    }
}

topicObj=new HandleTopics()
topicObj.handleSelectedTopic()
newsObj=new HandleNews()
newsObj.handleReadArea()
