let talk = document.getElementById("talk");

let button = document.getElementById("button").addEventListener("click", function(e) {
    let randomNumber = Math.floor(Math.random() * 11);

    if (randomNumber % 2 == 0) {
        talk.innerHTML = "Yes!";
    } else {
        talk.innerHTML = "No!";
    }

    talk.style.animation = 'none';
    talk.offsetHeight;
    talk.style.animation = null; 

    e.preventDefault;
});