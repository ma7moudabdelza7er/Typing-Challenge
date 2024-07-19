const main = document.querySelector(".main");
const btn =document.querySelector(".btn")
const TypingArea = document.querySelector(".typingArea");

const words = [
    "A day in the life of programmer",
    "What is JavaScript?",
    "What is React?",
    "What is Programming Language?",
    "What's your name?",
    "Where are you from?",
    "This is just random word",
    "What is Remix.js?",
    "New Technologies",
    "Is programming hard?",
    "Why do you wanna become a programmer?",
    "Which programming language you like the most?",
    "What is Golang? and why do you wanna learn it?",
    "What is CSS",
];

function start(){
    theWord = words[Math.floor(Math.random() * words.length)];
    main.innerHTML = theWord;
    data = new Date();
    startTime =data.getTime();
    console.log()
    
    //  console.log(end)
}
function end(){
    data = new Date();
    endTime = data.getTime();
    totalTime = (endTime - startTime) / 1000;
    main.style.border = "1px solid darkred"
    main.innerHTML = `Total Time is ${totalTime} seconds the number of correct chars is `
}
function result(){
    valueone = theWord.split("").map(function(el){return el.toLowerCase()})
    console.log(valueone);
    valuetwo= TypingArea.value.split("").map(function(el){return el.toLowerCase()})
    console.log(valuetwo);
    var correct = 0;
    var uncorrect =0
    for(var i=0;i<valueone.length;i++){
        if(valueone[i] == valuetwo[i]){
            correct++;
        }else{
            uncorrect++
        }
    }
    return main.innerHTML += correct + " Num of uncorrect " + uncorrect
}
btn.addEventListener("click",function(){
    if(btn.textContent == "Start Typing"){
        start()
        TypingArea.value = ""
        btn.innerHTML = "End task";
        main.style.border = "none"
    }else if(btn.textContent === "End task"){
        end() 
        btn.innerHTML = "Start Typing";
        console.log(result());
        TypingArea.value = ""
        
    }
    
    })