
var hours = new Date().getHours();
var greet;
//var window;
if (hours < 12)
    greet = 'Good Morning';
else if (hours >= 12 && hours <= 17)
    greet = 'Good Afternoon';
else if (hours >= 17 && hours <= 24)
    greet = 'Good Evening';
document.getElementById('Greetings').innerHTML = '<b>' + greet + '</b>'
