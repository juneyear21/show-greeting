document.getElementById('greetButton').addEventListener('click', function() {
    var time = new Date().getHours();
    var greeting;

    if (time < 12) {
        greeting = 'Good morning!';
    } else if (time < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }
    console.log("greating"+greeting);
    alert(greeting);
});