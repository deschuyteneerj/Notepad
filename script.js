document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("output").value = "Put your text here !";
});

document.getElementById("fontFamily").addEventListener("change", function() {
    document.getElementById("output").style.fontFamily = document.getElementById("fontFamily").options[document.getElementById("fontFamily").selectedIndex].value;
    console.log(document.getElementById("output").style.fontFamily);
});

document.getElementById("boldBtn").addEventListener("click", function() {
    document.getElementById("output").style.fontWeight = "bold";
});

document.getElementById("underlineBtn").addEventListener("click", function() {
    document.getElementById("output").style.textDecoration = "underline";
});

document.getElementById("italicBtn").addEventListener("click", function() {
    document.getElementById("output").style.fontStyle = "italic";
});

document.getElementById("normalBtn").addEventListener("click", function() {
    document.getElementById("output").style.fontStyle = "normal";
    document.getElementById("output").style.textDecoration = "none";
    document.getElementById("output").style.fontWeight = "normal";
});