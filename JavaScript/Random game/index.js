let output = document.getElementById('output')
let btn = document.getElementById('btn')
let goals = ["Go to countryside","Sport-time","Do a research","Work on business","Read a book","Go on a trip","Travel abroad","Discover new games","Chat with somebody online"]

btn.onclick = function(){
    var winner = goals[Math.floor(Math.random()*goals.length)]
    output.innerHTML = winner
}