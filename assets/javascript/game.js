var computerchoices = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var lose = 0;


document.getElementById("checkingalphabets").onclick = function () {
    var computerInput = Math.random();
    computerInput = computerchoices * computerchoices.length;
    computerInput = Math.floor(computerInput);

    if (document.getElementById("alphabets").value == computerInput) {
        wins++;
        document.getElementById("win").innerHTML = wins;
        alert("you won" + wins + "time(s)");
    }
    else {
        lose++;
        document.getElementById("lose").innerHTML = lose;
        alert("you have lost " + lose + "time(s)");
    }
}