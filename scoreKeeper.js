var button1 = document.querySelector("#b1");
var button2 = document.querySelector("#b2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var displayP1 = document.querySelector("#DisplayP1");
var displayP2 = document.querySelector("#DisplayP2");
var winningScoreDisplay = document.querySelector("#reach");
var scoreP1 = 0;
var scoreP2 = 0;
var winningScore = 5;
var gameOver = false;



button1.addEventListener("click", function(){
	if(!gameOver){
		scoreP1++;
		if (scoreP1 === winningScore){
			gameOver = true;
			displayP1.classList.add("winner");
		}
		displayP1.textContent = scoreP1;
	}
	
});

button2.addEventListener("click", function(){
	if(!gameOver){
		scoreP2++;
		if (scoreP2 === winningScore){
			gameOver = true;
			displayP2.classList.add("winner");
		}
		displayP2.textContent = scoreP2;
	}
	
});


resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	gameOver = false;
	scoreP1 = 0;
	scoreP2 = 0;
	displayP1.textContent = 0;
	displayP2.textContent = 0;
	displayP1.classList.remove("winner");
	displayP2.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	winningScore = Number(this.value);
	winningScoreDisplay.textContent = this.value;
	reset();
})




