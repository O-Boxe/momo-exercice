
// Objectif
/*
L'objectif est de programmer un oxo en faisant alterner au click l'apparition du o et x
a chaque fois qu'un joueur click sur le bouton tu devra verifier si il a gagner et changer 
le tour du joueur si c'est le o qui a jouer c est au tour du x et inversement.

*/

// Aide
/*
event -> c'est un objet passer qui contient des propriété qui vont t'être utile. Voici ce que event contient :
    event = {
        target* : <button>(la cible(button) sur laquel tu a cliquer)
    }


[*]target -> target est un objet qui contient lui aussi des chose utiles :
    target = {
        innerText : le texte que le button contient
    }
*/

game = {
    turn : "x",//contient le tour du joueur "o" || "x"
    xPlayerCase:[], //contient les case remplis par le joueur x
    oPlayerCase:[]  // contient les cases remplis par le joueur y
}

// les suites gagnantes : contient toutes les possibilité de gagné
winningSuite=[
    // hortizontale
    [1,2,3],
    [4,5,6],
    [7,8,9],
    // vertical
    [1,4,7],
    [2,5,9],
    [3,6,9],
    // diagonale
    [1,5,9],
    [3,5,7],
]



function clickOnCase(event, buttonPosition) {
    
}

