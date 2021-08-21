const readlineSync = require('readline-sync');
const name = readlineSync.question('What is your name?');
readlineSync.question('Hello ' + name + ', welcome Dead Zoo! Can you defeat the zoombie animals lurking in the shadows? Press enter to begin.');

const enemies = ['Ochstrike', 'Liger', 'Zonkey', 'Jack the Monkey'];
const rewards = ['Tiger Tooth', '10 EXP', '3 Gold Coins', 'Health Kit'];

var prize = [];
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = rewards[Math.floor(Math.random() * rewards.length)];

function RPG(){
    const attackPower = Math.floor(Math.random() * (4 - 3 + 4) + 5);
    const enemie = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 40;
    const enemiesPower = Math.floor(Math.random() * (4 - 3 + 4) + 5);
    const index = readlineSync.keyInSelect(options, 'What would you like to do next?');

    if (options[index] == 'Exit'){
        return userHealth = 0;
    }
    else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\n' + pickUp);
    }
    else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3){
            console.log('Walking slowly through the darkness...');
        }
        else if (key >= .3){
            console.log(enemie + ' appears from the dark!');
            while (enemiesHealth > 0 && userHealth > 0){
                const user = readlineSync.question('What do you do? Select "d" to dodge or "a" to attack the foe: ');
                switch (user){
                    case 'd':
                        const run = Math.random();
                        if (run < .5){
                            console.log('You try to dodge but ' + enemie + ' cuts you off and attacks you! You loose ' + enemiesPower + ' HP points.');
                        }
                        else {
                            console.log('You were able to successfully dodge the animal zoombie! Good thing zombies are known to be slow!!');
                            break;
                        }
                    case 'a':
                        enemiesHealth -= attackPower;
                        console.log('You attack ' + enemie + ' with a crowbar for '  + attackPower + ' HP points.');

                        if (enemiesHealth <= 0){
                            console.log('You have defeated ' + enemie + '.\n' + enemie + ' has dropped: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            }
                            else if (userHealth <= 0){
                                console.log(enemie + ' bites you! You begin convulsing and die...only to awake a zombie. Game Over! Try again.');
                            }
                        }
                }
            }
        }
    }
}

while (userHealth > 0){
    RPG();
}