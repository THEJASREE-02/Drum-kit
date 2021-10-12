var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "crash":
      var tom1 = new Audio("crash_cymbal.mp3");
      tom1.play();
      break;

    case "floor":
      var tom2 = new Audio("floor_tom.wav");
      tom2.play();
      break;

    case "bass":
      var tom3 = new Audio('bass_drum.mp3');
      tom3.play();
      break;

    case "high":
      var tom4 = new Audio('high_tom.wav');
      tom4.play();
      break;

    case "mid":
      var snare = new Audio('mid_tom.wav');
      snare.play();
      break;

    case "ride":
      var crash = new Audio('ride_cymbal.wav');
      crash.play();
      break;

    case "snare":
      var kick = new Audio('snare_drum.wav');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}