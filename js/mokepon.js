let btnPet = document.getElementById('btn-select')
let btnFire = document.getElementById('btn-fire')
let btnWater = document.getElementById('btn-water')
let btnEarth = document.getElementById('btn-earth')
let btnReset = document.getElementById('btn-reset')
let hpCounters = document.getElementById('hp-log')
let playerHp = 4
let enemyHp = 4



 

// PLAYER PET SELECTION SYSTEM 
const selectPet = ()=> {
    let hipodoge = document.getElementById('hipodoge')
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let playerPet = document.getElementById('player-pet')


    if(hipodoge.checked){
        alert('Seleccionaste a Hipodoge')
        playerPet.innerText = ' Hipodoge'
        selectEnemyPet()
    }else if(capipepo.checked){
        alert('Seleccionaste a Capipepo')
        playerPet.innerText = ' Capipepo'
        selectEnemyPet()
    }else if(ratigueya.checked){
        alert('Seleccionaste a Ratigueya')
        playerPet.innerText = ' Ratigueya'
        selectEnemyPet()
    } else{
        alert('No seleccionaste ningun Mokepon')
    }
    
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

hpCounters.classList.remove('display-none')

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
            result= "Ambas mascotas recibieron 1 punto de daño"
            playerHp--
            enemyHp--
            spanPlayerHp.innerText = playerHp
            spanEnemyHp.innerText = enemyHp
        } else if (playerAttack === "Fuego" && randomEnemyAttack === "Tierra" ||    playerAttack === "Agua" && randomEnemyAttack === "Fuego" || playerAttack === "Tierra" && randomEnemyAttack === "Agua") {
                result = "La mascota enemiga recibio 1 punto de daño"
                enemyHp--
                spanEnemyHp.innerText = enemyHp 
        } else {
            playerHp--
            result = "Tu mascota recibio 1 punto de daño" 
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
    <p><span id="result">${result}</span></p>`
    combatLog.append(logElement)
    setTimeout(hpStatus, 1000)
}
    
    
    
let matchResult
function hpStatus(){
    if(playerHp == 0) {
        matchResult = 'PERDISTE'
        endMatch(matchResult)
    }else if(playerHp == 0 && enemyHp == 0) {
        matchResult = 'EMPATE'
        endMatch(matchResult)
    }else if(enemyHp == 0 ){
        matchResult = 'GANASTE'
        endMatch(matchResult)
    }
}

let atkSelectionScreen = document.getElementById('atk-selection')
let petSelectionScreen = document.getElementById('pet-selection')
let endScreen = document.getElementById('end-screen')
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
    combatLog.innerHTML = ''
    playerHp = 4
    enemyHp = 4
    spanPlayerHp.innerText = playerHp
    spanEnemyHp.innerText = enemyHp
    hpCounters.classList.add('display-none')
    atkSelectionScreen.classList.remove('display-none')
    petSelectionScreen.classList.remove('display-none')
    combatLog.classList.remove('display-none')
    endScreen.classList.add('display-none')
} 
btnReset.addEventListener('click', resetGame)  