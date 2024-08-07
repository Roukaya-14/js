const buttons = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        result.textContent += buttons[i].textContent;
        console.log(result);

    });
}
reset.addEventListener("click", function() {
    result.textContent = 0;

});
del.addEventListener("click", function() {
    if (result.textContent !== "0") {
        result.textContent = result.textContent.slice(0, -1);
    }
});