const socket = io();

var onceVdo = "/asset/vdo/once.mp4";
var loopVdo = "/asset/vdo/loop.mp4";

var LoopSelectVdo = document.getElementById("vdoDisplay");

socket.on("eventEmit", e => {
    displayVdo(false);
    // console.log("dataEmited");
});

function displayVdo(e) {
    if (e) {
        LoopSelectVdo.src = loopVdo;
        LoopSelectVdo.loop = true;
        // console.log("loopStarted");
        // LoopSelectVdo.loop(true);
    } else {
        console.log("OnceStarted");
        LoopSelectVdo.src = onceVdo;
        LoopSelectVdo.loop = false;
        LoopSelectVdo.onended = () => {
            // console.log("loopStartedBySubFunction");
            LoopSelectVdo.src = loopVdo;
            LoopSelectVdo.loop = true;
        };
    }
}

document.addEventListener("keypress", event => {
    const keyName = event.key;
    if (keyName == "x") {
        displayVdo(false);
    }
    // if (keyName == "p") {
    //     displayVdo(true);
    // }
});

$(document).ready(function() {
    displayVdo(true);
});

/*----------------------------------------------------------------------------------------------*/

 function displayVdo1(e) {
    if (e) {
        LoopSelectVdo.src = loopVdo ;
        LoopSelectVdo.loop = true;
        // console.log("loopStarted");
        // LoopSelectVdo.loop(true);
    } else {
        console.log("OnceStarted");
        LoopSelectVdo.src = loopVdo;
        LoopSelectVdo.loop = false;
        LoopSelectVdo.onended = () => {
            // console.log("loopStartedBySubFunction");
            LoopSelectVdo.src = onceVdo;
            LoopSelectVdo.loop = true;
        };
    }
}

document.addEventListener("keypress", event => {
    const keyName = event.key;
    if (keyName == "z") {
        displayVdo1(false);
    }
    // if (keyName == "p") {
    //     displayVdo(true);
    // }
});

$(document).ready(function() {
    displayVdo1(true);
}); 
