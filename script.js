let result = document.getElementById("result");

function num(elem) {
    result.value = result.value + elem.value;
}

function ans() {
    if (!result.value) {
        result.value = "error";
    }
    result.value = new Function("return" + result.value);
}

function allclear() {
    result.value = null;
}