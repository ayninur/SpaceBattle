//////////////////////////////
//* Building the ship template 
//////////////////////////////'

// we will create a class template for all ships
class Ship {
    // initialize the objects in the class
    constructor(name, hull, firepower, accuracy) {
        // USS or Alienship? find out later
        this.name = name;
        // hull is a random number between 3-6
        // found using this: Math.floor(Math.random()(max - min + 1) + min) or Math.floor(Math.random()(6 - 3 + 1 = 4) + 3)
        this.hull = hull || Math.floor(Math.random() * 4) + 3;
        this.firepower = firepower || Math.floor(Math.random() + 3) + 2;
        this.accuracy = accuracy || (Math.floor(Math.floor() + 3) + 6) / 10;
    }
    ////////////////////////////
    //* Let's set up the attack
    ////////////////////////////

    attack(enemy) {
        // if the random value generated is <= the ships accuracy
        if (Math.random() <= this.accuracy) {
            alert(`This attack has been successful! ${enemy.name} has been hit by ${this.name}`);
            // adjust the accuracy
            enemy.hull -= this.firepower;
            alert(`The ${enemy.name} has a remaining hull of ${enemy.hull}`)
        } else {
            alert(`Ah! Looks like ${this.name} missed the shot! ${enemy.name} is free to live another...second`)
        }
    }
}

//////////////////////////////////////
//* Naming the Players (alien & uss)
//////////////////////////////////////

// create our USS ship
const USS = new Ship("USS Schwarz", 20, 5, .7)

// create an empty array to push each alien into
const alienShips = []

// create our 6 alien ships
const aliens = () => {
    // loop through the alien ships
    for (let i = 1; i < 7; i++) {
        // push the new Ship iteration and name it as stated in the Ship class a
        alienShips.push(new Ship(`Alien Ship ${[i]}`))[i];
    }
}

aliens();

//////////////////////////////////////
//* Let the games begin!
//////////////////////////////////////

let spaceBattleGame = () => {
    let gameIntro = prompt('Do you you want to attack or retreat?', "Attack or Retreat?")
    gameIntro.toLocaleLowerCase();
    if (gameIntro === "attack") {
        if (USS.hull > 0) {
            USS.attack(alienShips[0])
            if (alienShips[0].hull > 0) {
                alienShips[0].attack(USS)
                spaceBattleGame()
            } else if (aliens[0].hull <= 0) {
                alienShips.shift()
                if (aliens.length <= 0) {
                    alert(`The ${aliens.name} have finally bene destroyed! The ${USS.name} has saved all of humanity!!`)
                } else {
                    aliens[0].attack(USS)
                    spaceBattleGame()
                }
            }
        } else if (USS.hull <= 0) {
            alert(`The ${USS.name} has been destroyed!`)
        }
    } else {
        let quitGame = alert("You coward")
    }

}


$('#start').click(spaceBattleGame)


