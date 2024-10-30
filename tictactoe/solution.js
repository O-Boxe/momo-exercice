
let game = {
    turn: "x",
    xPlayerCase: [],
    oPlayerCase: []
}

const winningSuites = [
    // hortizontale
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // vertical
    [1, 4, 7],
    [2, 5, 9],
    [3, 6, 9],
    // diagonale
    [1, 5, 9],
    [3, 5, 7],
]


function clickOnCase(event, buttonPosition) {
    // si le button contient deja du texte alors le joueur ne peut pas prendre ce bouton
    if (event.target.innerText != '') {
        return
    }

    game[game.turn + "PlayerCase"] += buttonPosition

    // verifier si il a gagner
    checkIfWin(game.turn)



    // changer le tour du joueur
    event.target.innerText = game.turn
    if (game.turn == 'x') {
        game.turn = 'o'
    } else {
        game.turn = 'x'
    }

}


function checkIfWin(player) {
    // parcourir toute les suite gagnante et verifier si le joueur en possede une
    winningSuites.forEach(suite => {
        let score = 0

        // parcourir tout les nombres de la suite et verifier si le joueur a cocher ces cases
        suite.forEach(number => {
            // si les cases du joueur contienne le numéro alors on lui rajoute 1 
            if (game[player + "PlayerCase"].includes(number)) {
                score++
            }
        });

        // la suite contient trois chiffre si il a un score de 3 alors le joueur a une suite gagnante
        if (score == 3) {
            alert(`Le joueur >${player.toUpperCase()}< à gagné`)
            return
        }
    });

}