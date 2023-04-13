// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// I had a collection of buttons but did not know which one was clicked.
let butn = document.getElementsByClassName("like-glyph")
let buttons = Array.from(butn)
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault
    let modal = document.getElementById("modal")
    let p = document.getElementById("modal-message")
    //console.log("Before", e.target, e.target.innerHTML)
    if (e.target.innerHTML === EMPTY_HEART) {
        mimicServerCall()
        .then(msg => {
           if (msg === "Pretend remote server notified of action!") {
              e.target.innerHTML = FULL_HEART
              e.target.className = "activated-heart"
          } 
        }) 
        .catch(function (error) {
          modal.classList.remove("hidden")
          p.innerHTML = error
          setTimeout(() => modal.classList.add("hidden"), 3000);
           
        })
        //console.log("After", e.target, e.target.innerHTML)
    } else {
      //console.log("Do we get here?")
      e.target.innerHTML = EMPTY_HEART
      e.target.classList.remove("activated-heart")
    }
  })  
})    

  
 
// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
