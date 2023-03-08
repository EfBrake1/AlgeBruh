document.querySelector(".value").onclick = function(){
    let userNumber = parseInt(document.querySelector(".data").value);
    let number2 = 2023;
    alert("Вам " + (number2 - userNumber));
};
