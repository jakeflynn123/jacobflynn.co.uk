/**
 * Created by Jacob Flynn on 02/03/2017, all content and code copyright Jacob Flynn © 2017
 */

var thingsido = [
    "websites",
    "user interfaces",
    "platforms",
    "web applications"
];

var getSpanTag = document.getElementById("thingsido");

function changeWord() {
    getSpanTag.innerHTML = thingsido[0]; // Use always the first key.
    thingsido.push(thingsido.shift());    // Push the first key to the end of list.
}
changeWord();                  // First run,
setInterval(changeWord, 1500); // Subsequent loops