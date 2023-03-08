const currentYear = new Date().getFullYear();
document.querySelector(".value").onclick = function () {
    let userNumber = parseInt(document.querySelector(".data").value);
    alert("Вам " + (currentYear - userNumber));
};
