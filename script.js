const redo = document.getElementById("redo-btn");
const adviceNum = document.getElementById("advice-id");
const adviceTxt = document.querySelector(".advice-txt");

window.onload = giveAdvice;

// button funtion
redo.addEventListener("click", function(){
    giveAdvice();
});

//give advice with API
function giveAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceTxt.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}