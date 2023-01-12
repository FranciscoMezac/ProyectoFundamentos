from Characters import Characters
import random


def main():

    def Fight(player_1, player_2):

        turn = 1
        player_1.health = player_1._Characters__health
        player_2.health = player_2._Characters__health

        while player_1.health > 0 and player_2.health > 0:

            if turn == 1:
                miss=random.randint(0,4)
                action = int((input(f"\n Jugador 1, ¿Qué quieres hacer? \n1. Atacar \n2. Curarse\n")))
                if action == 1:
                    if miss==0:
                        print("\n ¡Jugador 1 fallo el ataque! \n")
                    else:
                        player_2.health -= (player_1.attack_damage - (player_1.attack_damage * (player_2.defence/100)))
                        print(f"\nJugador 1 ataca a Jugador 2 y le queda {player_2.health} de vida.")
                elif action == 2:
                    player_1.health_2 = player_1._Characters__health
                    if player_1.health == player_1.health_2:
                        print("¡No puedes sobrepasar tu vida maxima!")
                    else:
                        player_1.health += player_1.heal
                        if player_1.health > player_1.health_2:
                            while player_1.health > player_1.health_2:
                                    player_1.health -= 0.1
                            player_1.health = int(player_1.health) + 1
                        print(f"\nJugador 1 se cura y ahora tiene {player_1.health} de vida.")
                else:
                    print("jugador 1 ha perdido su turno")

                turn = 2
            else:
                miss=random.randint(0,4)
                action = int(input(f"\nJugador 2, ¿Qué quieres hacer? \n1. Atacar \n2. Curarse\n"))
                if action == 1:
                    if miss==0:
                        print("\n ¡Jugador 2 fallo el ataque! \n")
                    else:
                        player_1.health -= (player_2.attack_damage - (player_2.attack_damage * (player_1.defence/100)))
                        print(f"\nJugador 2 ataca a Jugador 1 y le queda {player_1.health} de vida.")
                elif action == 2:
                    player_2.health_2 = player_2._Characters__health
                    if player_2.health == player_2.health_2:
                        print("¡No puedes sobrepasar tu vida maxima!")
                    else:
                        player_2.health += player_2.heal
                        if player_2.health > player_2.health_2:
                            while player_2.health > player_2.health_2:
                                    player_2.health -= 0.1
                            player_2.health = int(player_2.health) + 1
                        print(f"\nJugador 1 se cura y ahora tiene {player_2.health} de vida.")
                else:
                    print("jugador 2 ha perdido su turno")

                turn = 1




        if player_1.health <= 0:
            print(f"\n¡Jugador 2 ha ganado la pelea.!\n")
        else:
            print(f"\n¡Jugador 1 ha ganado la pelea.!\n")



    def Tank():
        character = Characters(True, False, False, False, 0, 0, 0, 0)
        character.Tank()

        print("health: ",character._Characters__health)
        print("Damage: ",character.attack_damage)
        print("defence: ",character.defence)
        print("heal: ",character.heal)

    def Assasin():
        character = Characters(False, True, False, False, 0, 0, 0, 0)
        character.Assasin()

        print("health: ",character._Characters__health)
        print("Damage: ",character.attack_damage)
        print("defence: ",character.defence)
        print("heal: ",character.heal)

    def Wizard():
        character = Characters(False, False, True, False, 0, 0, 0, 0)
        character.Wizard()

        print("health: ",character._Characters__health)
        print("Damage: ",character.attack_damage)
        print("defence: ",character.defence)
        print("heal: ",character.heal)

    def Healer():
        character = Characters(False, False, False, True, 0, 0, 0, 0)
        character.Healer()

        print("health: ",character._Characters__health)
        print("Damage: ",character.attack_damage)
        print("defence: ",character.defence)
        print("heal: ",character.heal)




    print("\n")
    print("INTRUCCIONES: \n")
    print("Es un juego de turno con Characters con atributos unicos, decida las mejores opciones para ganar\n")
    print("Estadisticas de Characters a elegir")
    print("\nTank")
    Tank()
    print("\nAssasin")
    Assasin()
    print("\nWizard")
    Wizard()
    print("\nHealer")
    Healer()
    print("\n")
    print("player 1")
    print("Eliga una opcion: ")
    print("\n1.- Tank")
    print("\n2.- Assasin")
    print("\n3.- Wizard")
    print("\n4.- Healer")

    print("\nJugador1")
    playerchoice_1 = int(input("Elige tu rol Jugador 1: "))


    print("\nJugador 2: ")
    playerchoice_2= int(input("Elige tu rol Jugador 2: "))





    if playerchoice_1 == 1:

        player_1 = Characters(True, False, False, False, 0, 0, 0, 0)
        print("\njugador 1 ha elegido a TANQUE")
        player_1.Tank()

    if playerchoice_1 == 2:

        player_1 = Characters(False, True, False, False, 0, 0, 0, 0)
        print("\njugador 1 ha elegido a ASESINO")
        player_1.Assasin()

    if playerchoice_1 == 3:

        player_1 = Characters(False, False, True, False, 0, 0, 0, 0)
        print("\njugador 1 ha elegido a MAGO")
        player_1.Wizard()

    if playerchoice_1 == 4:

        player_1 = Characters(False, False, False, True, 0, 0, 0, 0)
        print("\njugador 1 ha elegido a CURANDERO")
        player_1.Healer()



    if playerchoice_2 == 1:

        player_2 = Characters(True, False, False, False, 0, 0, 0, 0)
        print("\njugador 2 ha elegido a TANQUE")
        player_2.Tank()

    if playerchoice_2 == 2:

        player_2 = Characters(False, True, False, False, 0, 0, 0, 0)
        print("\njugador 2 ha elegido a ASESINO")
        player_2.Assasin()

    if playerchoice_2 == 3:

        player_2 = Characters(False, False, True, False, 0, 0, 0, 0)
        print("\njugador 2 ha elegido a MAGO")
        player_2.Wizard()

    if playerchoice_2 == 4:

        player_2 = Characters(False, False, False, True, 0, 0, 0, 0)
        print("\njugador 2 ha elegido a CURANDERO")
        player_2.Healer()


    Fight(player_1, player_2)

    retry = input("¿Desean jugar otra vez? : ")

    if retry == "si":
        main()
    else:
        print("¡¡¡GRACIAS POR JUGAR!!!")

if __name__ == "__main__":
    main()
