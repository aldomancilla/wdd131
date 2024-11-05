setTimeout(function() {
    console.log("This message will appear after 3 seconds.");
}, 3000);
// Runs the anonymous function after 3000 milliseconds (3 seconds)

// setInterval(callback, interval)

function printCounter() {
    let count = 0;
    setInterval(function() {
        console.log("Count:", count++);
    }, 1000);
}

printCounter(); 