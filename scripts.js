
var operate = function(operator, number1, number2) {

}

const wrapper = document.getElementById('calculator');

wrapper.addEventListener('click', (event) => {
    console.dir(event.target);
    console.dir(event.target.id);
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    else if (event.target.id == "clear") {
        document.getElementById("input").innerText = "";
        return
    } else if (event.target.id === "enter") {
        document.getElementById("result").innerText = document.getElementById("input").innerText;
        return;
    }
    document.getElementById("input").innerText += event.target.innerText;

})