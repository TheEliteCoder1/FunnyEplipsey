var body = document.getElementsByTagName("body")
var teenAge = 0;
var teenName = "Munhar";
var maxAge = 10000;
var teenTag = "<h1></h1>";
var teenDeg = 0;
document.body.style.backgroundColor = "black";

var teenNames = [
    "Munhar", 
    "Shashank", 
    "Kymani", 
    "Eshan", 
    "Ethan",
    "Sadaat",
    "Raphael"
]

var fontList = [
    "Helvetica",
    "Arial",
    "Arial Black",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Gill Sans",
    "Times New Roman",
    "Georgia",
    "Palatino",
    "Baskerville",
    "Andalé Mono",
    "Courier",
    "Lucida", 
    "Monaco",
    "Bradley Hand",
    "Brush Script MT",
    "Luminari (fantasy)",
    "Comic Sans MS",
]

var textDecorationList = [ 
    "dashed",  "dotted", "double", "none", "overline", "solid", "underline", "wavy"
]


function numberInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Executes every few miliseoncds
// setInterval({code}, milils)
setInterval(
    function () 
    {
        var teenDivs = document.getElementsByClassName("TeenDiv");
        for (var i = 0; i < teenDivs.length; i++) {
            var teenDiv = teenDivs[i];
            teenDiv.style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
            teenDiv.style.boxShadow = `${numberInRange(0, 10)}px ${numberInRange(-15, 15)}px ${numberInRange(-15, 15)}px rgb(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)})`;
            // var teenMessages = teenDiv.getElementsByClassName("Teens");
            // for (var j = 0; j < teenMessages.length; j++) {
            //     var teenMessage = teenMessages[j];
            // }
        }
    }, 

100);

setInterval(
    function () 
    {
        var teenDivs = document.getElementsByClassName("TeenDiv");
        for (var i = 0; i < teenDivs.length; i++) {
            var teenDiv = teenDivs[i];
            // teenDiv.style.transform = `rotate(${teenDeg}deg)skewX(${teenDeg}deg)`;
        }
    }, 

100);

setInterval(
    function () {
        const randomFont = randomElement(fontList);
        const randomTextDecoration = randomElement(textDecorationList);
        const randomTeenName = randomElement(teenNames);
        var teenDivs = document.getElementsByClassName("TeenDiv")
        for (var i = 0; i < teenDivs.length; i++) {
            var teenDiv = teenDivs[i];
            var teenMessages = teenDiv.getElementsByClassName("Teens");
            for (var j = 0; j < teenMessages.length; j++) {
                var teenMessage = teenMessages[j];
                teenMessage.style.fontFamily = randomFont;
                teenMessage.style.textDecoration = randomTextDecoration;
                teenMessage.style.fontSize = numberInRange(10, 100);
            }
        }
        teenName = randomTeenName;
    },
    500
)

setInterval(
    function () 
    {
        if ( teenAge < maxAge) 
        {
            teenAge += 1
        
        }; 
        teenDeg += 1;
        document.title = teenAge;
        var teenDivs = document.getElementsByClassName("TeenDiv");
        for (var i = 0; i < teenDivs.length; i++) {
            var teenDiv = teenDivs[i];
            var teenMessages = teenDiv.getElementsByClassName("Teens");
            for (var j = 0; j < teenMessages.length; j++) {
                var teenMessage = teenMessages[j];
                teenMessage.innerHTML = `${teenName} is ${teenAge} years old`;
            }
        }
    },  
1);

setInterval(
    function()
    {
        if (teenAge < maxAge)
        {
            var div = document.createElement("div")
            div.className = "TeenDiv"
            var h1 = document.createElement("h1")
            h1.className = "Teens"
            h1.innerHTML = `${teenName} is ${teenAge} years old`
            div.appendChild(h1)
            document.body.appendChild(div)

        }
        
    },
100
)

