let turn = 1; moves = 0;
let player1 = []; player2 = [];
let winning = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];

function startGame() {
   let table = document.getElementById("table");
    table.style.display = "block";
}

function playerMove(id) {
    if (turn == 1) {
        player1.push(Number(id));
        document.getElementById(id).innerHTML += '<p class ="card-text">X</p>';
        document.getElementById(id).removeAttribute("onclick");
        turn = 0;
        ++moves;
    } else {
        player2.push(Number(id));
        document.getElementById(id).innerHTML += '<p class ="card-text">0</p>';
        document.getElementById(id).removeAttribute("onclick");
        turn = 1;
        ++moves;
    }
    if(moves >= 5) {
        for(let i = 0; i < 8; ++i) {
            if(!winning[i].some((string) => player1.indexOf(string) == -1)) {
                winningText.innerHTML = 'Congratulations player X won!'
                i = 8;
                for(let j = 1; j <= 9; ++j) {
                    document.getElementById(j).removeAttribute("onclick");
                }
            }
            if(!winning[i].some((string) => player2.indexOf(string) == -1)) {
                winningText.innerHTML = 'Congratulations player 0 won!'
                i = 8;
                for(let j = 1; j <= 9; ++j) {
                    document.getElementById(j).removeAttribute("onclick");
                }
            }
        }
    }
    if (moves == 9) {
        winningText.innerHTML = 'I am sorry.Nobody won!'
    }
}
