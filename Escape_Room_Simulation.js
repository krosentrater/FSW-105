var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I ask who is playing?');
var welcomeMessage = `Welcome ${playerName}! Good luck playing the JavaScript Escape Room Simulation Game!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while (isAlive == true){
    var gameOptions = readlineSync.keyIn(`Press 1 to put your hand in the key hole to see if there is anything inside. \nPress 2 to pick up the key on top of the table. \nPress 3 to try to open the door. `, {limit: '$<1-3>'});
    if (gameOptions == 1){
        // Puts hand in hole, dies. Does not have key.
        console.log(`${playerName}, you selected Option 1 and put your hand into the key hole only for it to be cut off! You die from blood loss, GAME OVER. Please try again!`);
        isAlive = false;
    }
    else if (gameOptions == 2 && hasKey == false){
        //Picks up key from table. Does not have key at this point. 
        console.log(`${playerName}, you have selected Option 2 and found a strange looking key.`);
        hasKey = true;
    }
    else if (gameOptions == 2 && hasKey == true){
        //Player selects option 2 to pick up key again but already has it at this point. 
        console.log(`${playerName}, you have already picked up the keyfrom the table! Try selecting another option!`);
    }
    else if (gameOptions == 3 && hasKey == false){
        //Player selects try to open the door. Does not have key at this time, still locked in.
        console.log(`${playerName}, you try to open the door but it is locked and you do not have the key to unlock it yet!`);
    }
    else if (gameOptions == 3 && hasKey == true){
        //Player selects try to open the door. Does have the key. Game ends due to successfully escaping room.
        console.log(`${playerName}, the key you found earlier works! You open the door and escape the room! Congratulations on escaping! -GAME OVER-`);
        isAlive = false;
    }
}