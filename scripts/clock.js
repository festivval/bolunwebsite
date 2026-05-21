$(document).ready(function() {
ShowTime();
});
function ShowTime() {
var dt = new Date();
document.getElementById("lblTime").innerHTML = dt.toLocaleTimeString([], { hour: 'numeric', hour12: true, minute: 'numeric' });
window.setTimeout("ShowTime()", 1000); // Here 1000(milliseconds) means one 1 Sec
}