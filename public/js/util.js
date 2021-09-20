document.addEventListener("DOMContentLoaded", function() {
    console.log("util.js init");
    updateClock(totalTime = 10);
});
function updateClock(totalTime) {
    document.getElementById('countdown').innerHTML = "Será redireccionado en " + totalTime;
    if (totalTime == 1) {
        window.location.replace("https://westnet.com.ar/");
    } else {
        totalTime -= 1;
        setTimeout(`updateClock(${totalTime})`, 1000);
    } 
}
