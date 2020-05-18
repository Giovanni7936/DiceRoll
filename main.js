let diceRolls = document.querySelector('#diceRoll')
let roll = document.querySelector('#rollIt')
let pastRoll = document.querySelector('#past')
let total = document.querySelector('#score') 
let list = document.querySelector('#scoreList')
let Reset = document.querySelector('.startOver') 



let dieRolls = []

roll.addEventListener('click', function(){
    dieRolls = []
    let totalRolls = 0
    let dieIndex = 0
    let userInput = diceRolls.value
    while(dieIndex < userInput){


     let result = Math.floor(Math.random()* 6)+1
     totalRolls += result
        dieRolls.push(result)
     dieIndex += 1 
     console.log('Roll the dice!')
}
    total.innerHTML = totalRolls
})

pastRoll.addEventListener('click' , function(){
    let dieIndex = 0 
    list.innerHTML = ''
    while(dieIndex < dieRolls.length){
        let scoreListItem = document.createElement("LI")
        let score=document.createTextNode(`${dieRolls[dieIndex]}`)
        scoreListItem.appendChild(score)
        list.appendChild(scoreListItem)
        dieIndex += 1
    }

    
    console.log('Your past rolls.')

})

Reset.addEventListener('click' , function(){
    list.innerHTML = ''
    total.innerHTML = ''
    scoreList.innerHTML = ''
    dieRolls = ''
    
})