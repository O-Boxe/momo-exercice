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

    if (playerMove == computerMove) {
        // egalité
        console.log("égalité")
        return 
    }

    switch (playerMove) {
        case '✂️':
            // si l ordi a fais papier le joueur gagne sinon
            if (computerMove == '🧻') {
                playerScore++
            }else{
                computerScore++
            }
            break;
        case '🧻':
            if (computerMove == '🪨') {
                playerScore++
            }else{
                computerScore++
            }
            break;
        case '🪨':
            if (computerMove == '✂️') {
                playerScore++
            }else{
                computerScore++
            }
            break;
    
        default:
            break;
    }

    if (computerScore == 3) {
        console.log('l\'ordi à gagné' )
    }else if (playerScore == 3) {
        console.log('vous avez à gagnez' )
    }
    
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
    const randomMove = Math.floor(Math.random() * 3)


    return possibility[randomMove]

}