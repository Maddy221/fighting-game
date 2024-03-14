let lifePoints = 100;
let botPoints = 100;


document.querySelector('#attack').addEventListener('click', playerAttack);
document.querySelector('#heal').addEventListener('click', playerHeal);

function playerAttack(evt){
  //create random damage
    //range 10-30
    const dmg = Math.floor(Math.random()*21)+10
  // damage the botPoints
    botPoints -= dmg;
  //change the botPoints on screen
    document.querySelector('.enemy span').innerHTML = botPoints
  //triggers the bot attack
    botAttack()
}

function playerHeal(evt){
    //random heal
    const heal = Math.floor(Math.random()*21)+10
    //increase the life points
    lifePoints += heal;
    document.querySelector('.player span').innerHTML = lifePoints
    botAttack()

}

function botAttack(){
  if (botPoints <= 30){
    botHeal()
  }
  else{
    //damage lifePoints
    //create random damage
    //range 10-30
    const dmg = Math.floor(Math.random()*21)+10
  // damage the botPoints
    lifePoints -= dmg;
  //change the botPoints on screen
    document.querySelector('.player span').innerHTML = lifePoints
  //triggers the bot attack
    //change the lifePoints on screen
  }
}

function botHeal(){
  const heal = Math.floor(Math.random()*21)+10
    //increase the life points
    botPoints += heal;
    document.querySelector('.player span').innerHTML = botPoints
}