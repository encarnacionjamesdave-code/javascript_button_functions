
function showAlert() {
    alert("Hello! alert is activited.");
}

function showConfirm() {
    let answer = confirm("Do you want to continue?");

    if (answer) {
        document.getElementById("result").textContent =
            "You clicked OK.";
    } else {
        document.getElementById("result").textContent =
            "You clicked Cancel.";
    }
}
function showPrompt() {
    let name = prompt("What is your name?");

    if (name) {
        document.getElementById("result").textContent =
            "Hello, " + name + "!";
    } else {
        document.getElementById("result").textContent =
            "You did not enter a name.";
    }
}
