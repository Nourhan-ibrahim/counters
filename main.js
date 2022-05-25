var num = document.getElementById("number");
num.value = 0; //initial value
num.style.color = "black"; //initial color
var increase = document.getElementById("increase");
var rest = document.getElementById("rest");
var decrease = document.getElementById("decrease");
rest.addEventListener('click', function () {
    num.value = 0;
    number.textContent = 0;
    if (num.value == 0) {
        num.style.color="black";
    }
    return num.value;
})
increase.addEventListener("click", function () {
    num.value =num.value + 1;
    number.textContent = num.value;
    if (num.value > 0) {
        num.style.color="green";

    }
    else if (num.value == 0) {
        num.style.color="black";
    }
    return num.value;

})
decrease.addEventListener("click", function () {
    num.value =num.value - 1;
    number.textContent = num.value;
    if (num.value < 0) {
        num.style.color="red";
    }
    else if (num.value == 0) {
        num.style.color="black";
    }
    return num.value;

})
// if (num.value < 0) {
//     num.style.color="red";
// }
// else if (    num.value > 0      ) {
//     num.style.color="green";
// }
// else {
//     num.style.color="black";

// }