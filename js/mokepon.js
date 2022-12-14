let atkSelectionScreen = document.getElementById('atk-selection')
let petSelectionScreen = document.getElementById('pet-selection')
let endScreen = document.getElementById('end-screen')
let btnPet = document.getElementById('btn-select')
let btnFire = document.getElementById('btn-fire')
let btnWater = document.getElementById('btn-water')
let btnEarth = document.getElementById('btn-earth')
let btnReset = document.getElementById('btn-reset')
let playerHp = 4
let enemyHp = 4

let optionOne = document.getElementById('pet-1')
let optionTwo = document.getElementById('pet-2')
let optionThree = document.getElementById('pet-3')




// PLAYER PET SELECTION SYSTEM 
const selectPet = ()=> {
    let hipodoge = document.getElementById('hipodoge')
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let playerPet = document.getElementById('player-pet')


    if(hipodoge.checked){
        alert('Seleccionaste a Hipodoge')
        playerPet.innerText = ' Hipodoge'
        optionOne.classList.add('active')
        selectEnemyPet()
    }else if(capipepo.checked){
        alert('Seleccionaste a Capipepo')
        playerPet.innerText = ' Capipepo'
        optionTwo.classList.add('active')
        selectEnemyPet()
    }else if(ratigueya.checked){
        alert('Seleccionaste a Ratigueya')
        playerPet.innerText = ' Ratigueya'
        optionThree.classList.add('active')
        selectEnemyPet()
    } else{
        alert('No seleccionaste ningun Mokepon')
    }
    atkSelectionScreen.classList.remove('display-none')
    btnReset.classList.remove('display-none')
    petSelectionScreen.classList.add('display-none')
}
// RANDOM NUMBER FUNCTION
function selectRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// ENEMY PET SELECTION SYSTEM
function selectEnemyPet(){
    let selectEnemy = selectRandom(1,3)
    let enemyPet = document.getElementById('enemy-pet')
    

    if (selectEnemy == 1) {
        enemyPet.innerText = 'Hipodoge'
    } else if (selectEnemy == 2) {
        enemyPet.innerText = 'Capipepo'
    }  else {
        enemyPet.innerText = 'Ratigueya'
} 


}
btnPet.addEventListener('click', selectPet) 



// COMBAT SECTION PLAYER ATTACKS 

let playerAttackLog = document.getElementById('player-attack')
let playerAttack = ''
    function fireAttack(){
        playerAttack = 'Fuego'

        enemyAttack()

    }
    function watterAttack(){
        playerAttack = 'Agua'

        enemyAttack()

    }
    function earthAttack(){
        playerAttack = 'Tierra'

        enemyAttack()


    }

    let spanPlayerHp = document.getElementById('player-hp')
    let spanEnemyHp = document.getElementById('enemy-hp')

function combat() {

        if (playerAttack === randomEnemyAttack) {
            result= "Ambas mascotas recibieron 1 punto de da??o"
            playerHp--
            enemyHp--
            spanPlayerHp.innerText = playerHp
            spanEnemyHp.innerText = enemyHp
        } else if (playerAttack === "Fuego" && randomEnemyAttack === "Tierra" ||    playerAttack === "Agua" && randomEnemyAttack === "Fuego" || playerAttack === "Tierra" && randomEnemyAttack === "Agua") {
                result = "La mascota enemiga recibio 1 punto de da??o"
                enemyHp--
                spanEnemyHp.innerText = enemyHp 
        } else {
            playerHp--
            result = "Tu mascota recibio 1 punto de da??o" 
            spanPlayerHp.innerText = playerHp
        }
        return result
    }


// COMBAT SECTION ENEMY ATTACKS

    let enemyAttacklog = document.getElementById('enemy-attack')
    let randomEnemyAttack = ''

    function enemyAttack(){
        randomAttack = selectRandom(1,3)


        if (randomAttack == 1) {
            randomEnemyAttack = 'Fuego'

        } else if (randomAttack == 2) {
            randomEnemyAttack = 'Agua'

        }  else {
            randomEnemyAttack = 'Tierra'

    }
    combat() 
    logUpdate()
}
btnFire.addEventListener('click', fireAttack)
btnWater.addEventListener('click', watterAttack)
btnEarth.addEventListener('click', earthAttack)

// COMBAT LOG UPDATE
let result = ''
let combatLog = document.getElementById('combat-log')
function logUpdate() {
    let logElement = document.createElement('div')
    logElement.innerHTML = `<p>Tu mascota  ataco con : <span id="player-attack">${playerAttack}</span></p>
    <p>La mascota  del enemigo ataco con : <span id="enemy-attack">${randomEnemyAttack}</span></p>
    <p><span id="result">${result}</span></p>
    <hr>`
    combatLog.append(logElement)
    setTimeout(hpStatus, 3000)
    if(playerHp == 0 || enemyHp == 0){
        btnEarth.disabled = true
        btnFire.disabled = true
        btnWater.disabled = true
        }   
    
}
    
    
    
let matchResult
function hpStatus(){
    if(playerHp == 0 && enemyHp == 0) {
        matchResult = 'EMPATE'
        endMatch(matchResult)
    }else if(playerHp == 0) {
        matchResult = 'PERDISTE'
        endMatch(matchResult)
    }else if(enemyHp == 0 ){
        matchResult = 'GANASTE'
        endMatch(matchResult)
    }
    
}


function endMatch(matchResult){
    atkSelectionScreen.classList.add('display-none')
    petSelectionScreen.classList.add('display-none')
    combatLog.classList.add('display-none')
    endScreen.classList.remove('display-none')
    let spanMatchResult = document.getElementById('match-result')
    spanMatchResult.innerText = matchResult

}




// RESET GAME 
function resetGame(){
    location.reload()
} 
btnReset.addEventListener('click', resetGame)  