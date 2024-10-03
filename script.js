let text=document.getElementById("text")
let guess=document.getElementById("guess")
let message=document.getElementById("message")
let count=document.getElementById("count")
let again=document.getElementById("again")
let result=document.getElementById("result")
let replay=document.querySelector(".replay")
let randomNumber=Math.floor(Math.random()*100)+1
let guessCount=10
function check(){
      //  guessCount--
    let num=Number(text.value)
    if(num==''){
      alert("hello ")
    }
    else if(randomNumber===num){
      
        message.innerText='Congratulations! You guessed the correct number'
        message.style.color = 'green';
        text.disabled=true
        replay.style.display="block"
        result.innerText='you win the game'
        result.style.color='green'
       
        guessCount--
       } else if (num < randomNumber) {
         message.textContent = 'Too low! Try again.';
         message.style.color = 'orange';
         guessCount--
       } else {
         message.textContent = 'Too high! Try again.';
         message.style.color = 'red';
         guessCount--
       }
       text.value=''
       text.focus()
       count.innerText=guessCount
       console.log(randomNumber)
       if(guessCount==0){
        replay.style.display="block"
              result.innerText="you lost the game"
              
              result.style.color='red'
      }
}


again.addEventListener("click",()=>{
  window.location.reload();
})

