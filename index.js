// alert("hello!"); use hello to test if connected to index.html
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function(){
      // console.log(this);
      // console.log(event);
      makeSound(this.innerHTML);
      buttonAnimation(this.innerHTML)

    });
}

document.addEventListener("keydown", function(event){
  // console.log(this); // function
  // console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key)

});


function makeSound(key){

  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default: // else
      console.log(key);
    }
}

function buttonAnimation(classKey) {
  classHTML = document.querySelector('.' + classKey);
  // console.log(htmlFile.classList);
  classHTML.classList.add("pressed");
  setTimeout(function(){
    classHTML.classList.remove("pressed");
  }, 20)
}
