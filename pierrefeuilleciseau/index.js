/**
 * Règles : 
 *      tu joue un pierre feuille ciseau contre  l'ordinateur :
 *          - a chaque fois que le joueur click sur un bouton tu calcule un mouvement aleatoire
 *          - tu verifie qui a gagner entre le joueur et le choix aleatoire
 *          - tu ajoute 1 au score de celui qui gagne le round
 *          - au moment ou un joueur a 3 il a gagner !
 * 
 * 
 */

const possibility = ['✂️','🧻','🪨'];

let computerScore = 0
let playerScore = 0

function clickOnCase(playerMove) {
    // generer aletoirement le choix de l'ordinateur
    const computerMove = generateRandomMoveForComputer()
    
}


/**
 * --- Aide ---
 * Math.random() renvoie un nombre a virgule aleatoire entre 0 et 1
 * 
 * Math.floor(monNombreAArrondir) renvoie le nombre entre parenthèse arrondi
 * 
 */

function generateRandomMoveForComputer() {
    // retourner un mouvement aleatoire entre ✂️ 🧻 🪨 



}