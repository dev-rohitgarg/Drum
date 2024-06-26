
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick(){
    var drumText = this.innerHTML;
    handleKeyPressed(drumText);
    buttonAnimation(drumText);

    
}

document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    handleKeyPressed(keyPressed);
    buttonAnimation(keyPressed);
});

function buttonAnimation(keypressed){
    
    var buttonPressed = document.querySelector("."+keypressed);
    // var buttonClass = "drum "+keypressed+" pressed";
    // buttonPressed.setAttribute("class", buttonClass);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100);

}

function handleKeyPressed(keyPressed){
    switch(keyPressed){
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio('./sounds/snare.mp3');
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio('./sounds/crash.mp3');
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio('./sounds/kick-bass.mp3');
            tom7.play();
            break;
        default:
            console.log("invaild");
    }
}