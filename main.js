import { Character } from "../piton/JavaScript/Character.js/index.js";

function main(){

    function Fight(player_1, player_2) {
        let turn = 1;
        player_1.health = player_1._Character__health;
        player_2.health = player_2._Character__health;

    while(player_1.health > 0 && player_2.health > 0) {
        if(turn == 1) {              
            let miss = Math.floor(Math.random() * 5);
            let action = parseInt(prompt(`\n Jugador 1, ¿Qué quieres hacer? \n1. Atacar \n2. Curarse\n`));
            if(action == 1) {
                if(miss == 0) {
                    console.log("\n ¡Jugador 1 fallo el ataque! \n");
                } else {
                    player_2.health -= (player_1.attack_damage - (player_1.attack_damage * (player_2.defence/100)));
                    console.log(`\nJugador 1 ataca a Jugador 2 y le queda ${player_2.health} de vida.`);
                }
            } else if(action == 2) {        
                player_1.health_2 = player_1._Character__health;
                if(player_1.health == player_1.health_2) {
                    console.log("¡No puedes sobrepasar tu vida maxima!");
                } else {    
                    player_1.health += player_1.heal;
                    if(player_1.health > player_1.health_2) {
                        while(player_1.health > player_1.health_2) {
                            player_1.health -= 0.1;
                        }
                        player_1.health = parseInt(player_1.health) + 1;
                    }
                    console.log(`\nJugador 1 se cura y ahora tiene ${player_1.health} de vida.`);
                }
            } else {
                console.log("jugador 1 ha perdido su turno");
            }
            turn = 2;
        } else if(turn == 2) {
            miss = Math.floor(Math.random() * 5);
            action = parseInt(prompt(`\n Jugador 2, ¿Qué quieres hacer? \n1. Atacar \n2. Curarse\n`));
            if(action == 1) {
                if(miss == 0) {
                    console.log("\n ¡Jugador 2 fallo el ataque! \n");
                } else {
                    player_1.health -= (player_2.attack_damage - (player_2.attack_damage * (player_1.defence/100)));
                    console.log(`\nJugador 2 ataca a Jugador 1 y le queda ${player_1.health} de vida.`);
                }
            }else if(action === 2) {
                player_2.health_2 = player_2._Character__health;
            if (player_2.health === player_2.health_2) {
                console.log("¡No puedes sobrepasar tu vida maxima!");
            } else {
                player_2.health += player_2.heal;
                if (player_2.health > player_2.health_2) {
                    while (player_2.health > player_2.health_2) {
                        player_2.health -= 0.1;
                }
                    player_2.health = parseInt(player_2.health) + 1;
                }
                console.log(`\nJugador 1 se cura y ahora tiene ${player_2.health} de vida.`);
            }
            } else {
                console.log("jugador 2 ha perdido su turno");
            }
            
            turn = 1;
            
    if (player_1.health <= 0) {
        console.log('\n¡Jugador 2 ha ganado la pelea.!\n');
    } else {
        console.log('\n¡Jugador 1 ha ganado la pelea.!\n');
    }

            }   
        }
    }

    
    function Tank() {
        let character = new Character(true, false, false, false, 0, 0, 0, 0);
        character.Tank();
        
        console.log("health: ", character._Character__health);
        console.log("Damage: ", character.attack_damage);
        console.log("defence: ", character.defence);
        console.log("heal: ", character.heal);
    }
        
    function Assasin() {
        let character = new Character(false, true, false, false, 0, 0, 0, 0);
        character.Assasin();
        
        console.log("health: ", character._Character__health);
        console.log("Damage: ", character.attack_damage);
        console.log("defence: ", character.defence);
        console.log("heal: ", character.heal);
    }

    function Wizard() {
        let character = new Character(false, false, true, false, 0, 0, 0, 0);
        character.Wizard();
        
        console.log("health: ", character._Characters__health);
        console.log("Damage: ", character.attack_damage);
        console.log("defence: ", character.defence);
        console.log("heal: ", character.heal);
    }
        
    function Healer() {
        let character = new Character(false, false, false, true, 0, 0, 0, 0);
    }     

    console.log("\n");
    console.log("INTRUCCIONES: \n");
    console.log("Es un juego de turno con Characters con atributos unicos, decida las mejores opciones para ganar\n");
    console.log("Estadisticas de Characters a elegir");
    console.log("\nTank");
    Tank();
    console.log("\nAssasin");
    Assasin();
    console.log("\nWizard");
    Wizard();
    console.log("\nHealer");
    Healer();
    console.log("\n");
    console.log("player 1");
    console.log("Eliga una opcion: ");
    console.log("\n1.- Tank");
    console.log("\n2.- Assasin");
    console.log("\n3.- Wizard");
    console.log("\n4.- Healer");

    console.log("\nJugador1");
    const playerchoice_1 = parseInt(prompt("Elige tu rol Jugador 1: "));


    console.log("\nJugador 2: ");
    const playerchoice_2 = parseInt(prompt("Elige tu rol Jugador 2: "));



    //PLAYER 1

    if (playerchoice_1 === 1) {

        const player_1 = new Character(true, false, false, false, 0, 0, 0, 0);
        console.log("\njugador 1 ha elegido a TANQUE");
        player_1.Tank();

    }
    if (playerchoice_1 === 2) {

        const player_1 = new Character(false, true, false, false, 0, 0, 0, 0);
        console.log("\njugador 1 ha elegido a ASESINO");
        player_1.Assasin();

    }
    if (playerchoice_1 === 3) {

        const player_1 = new Character(false, false, true, false, 0, 0, 0, 0);
        console.log("\njugador 1 ha elegido a MAGO");
        player_1.Wizard();

    }
    if (playerchoice_1 === 4) {

        const player_1 = new Character(false, false, false, true, 0, 0, 0, 0);
        console.log("\nJugador 1 ha elegido a HEALER")
        player_1.Healer();

    }

    // PLAYER 2

    if (playerchoice_2 === 1) {
        player_2 = new Character(true, false, false, false, 0, 0, 0, 0);
        console.log("\njugador 2 ha elegido a TANQUE");
        player_2.Tank();
    }

    if (playerchoice_2 === 2) {
        player_2 = new Character(false, true, false, false, 0, 0, 0, 0);
        console.log("\njugador 2 ha elegido a ASESINO");
        player_2.Assasin();
    }

    if (playerchoice_2 === 3) {
        player_2 = new Character(false, false, true, false, 0, 0, 0, 0);
        console.log("\njugador 2 ha elegido a MAGO");
        player_2.Wizard();
    }

    if (playerchoice_2 === 4) {
        player_2 = new Character(false, false, false, true, 0, 0, 0, 0);
        console.log("\njugador 2 ha elegido a CURANDERO");
        player_2.Healer();
    }

    Fight(player_1, player_2);

    retry = prompt("¿Desean jugar otra vez? : ");

    if (retry === "si") {
        main();
    } else {
        console.log("¡¡¡GRACIAS POR JUGAR!!!");
    }
}

main();
