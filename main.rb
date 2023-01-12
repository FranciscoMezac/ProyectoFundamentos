require_relative 'Characters'

    def main
      def fight(player_1, player_2)
          turn = 1
          player_1.health = player_1.instance_variable_get(:@health)
          player_2.health = player_2.instance_variable_get(:@health)
          while player_1.health > 0 && player_2.health > 0 do

              if turn == 1
                  miss = rand(0..4)
                  puts "\n Jugador 1, ¿Qué quieres hacer? \n1. Atacar \n2. Curarse\n"
                  action = gets.chomp.to_i
                  if action == 1
                      if miss == 0
                          puts "\n ¡Jugador 1 fallo el ataque! \n"
                      else
                          player_2.health -= (player_1.attack_damage - (player_1.attack_damage * (player_2.defence/100)))
                          puts "\nJugador 1 ataca a Jugador 2 y le queda #{player_2.health} de vida."
                      end
                  elsif action == 2
                      player_1.health_2 = player_1._Characters__health
                      if player_1.health == player_1.health_2
                          puts "¡No puedes sobrepasar tu vida maxima!"
                      else
                          player_1.health += player_1.heal
                          if player_1.health > player_1.health_2
                              while player_1.health > player_1.health_2
                                  player_1.health -= 0.1
                              end
                              player_1.health = player_1.health.to_i + 1
                          end
                          puts "\nJugador 1 se cura y ahora tiene #{player_1.health} de vida."
                      end
                  else
                      puts "jugador 1 ha perdido su turno"
                  end

                  turn = 2


              else
                  miss = rand(0..4)
                  puts "\nJugador 2, ¿Qué quieres hacer? \n1. Atacar \n2. Curarse\n"
                  action = gets.chomp.to_i
                  if action == 1
                      if miss == 0
                          puts "\n ¡Jugador 2 fallo el ataque! \n"
                      else
                          player_1.health -= (player_2.attack_damage - (player_2.attack_damage * (player_1.defence/100)))
                          puts "\nJugador 2 ataca a Jugador 1 y le queda #{player_1.health} de vida."
                      end
                  elsif action == 2
                      player_2.health_2 = player_2._Characters__health
                      if player_2.health == player_2.health_2
                          puts "¡No puedes sobrepasar tu vida maxima!"
                      else
                          player_2.health += player_2.heal
                          if player_2.health > player_2.health_2
                              while player_2.health > player_2.health_2
                                  player_2.health -= 0.1
                              end
                                player_2.health = player_2.health.to_i + 1
                          end
                          puts "\nJugador 2 se cura y ahora tiene #{player_2.health} de vida."
                      end
                  else
                      puts "jugador 2 ha perdido su turno"
                  end
                  turn = 1
              end

              if player_1.health <= 0
                  puts "\n¡Jugador 2 ha ganado la pelea!\n"
              else
                  puts "\n¡Jugador 1 ha ganado la pelea!\n"
              end
          end
      end



      def tanks
        character = Characters.new(true, false, false, false, 0, 0, 0, 0)
        character.tank

        puts "health: #{character.instance_variable_get(:@health)}"
        puts "Damage: #{character.attack_damage}"
        puts "defence: #{character.defence}"
        puts "heal: #{character.heal}"
      end

      def assasins
        character = Characters.new(false, true, false, false, 0, 0, 0, 0)
        character.assasin

        puts "health: #{character.instance_variable_get(:@health)}"
        puts "Damage: #{character.attack_damage}"
        puts "defence: #{character.defence}"
        puts "heal: #{character.heal}"
      end

      def wizards
        character = Characters.new(false, false, true, false, 0, 0, 0, 0)
        character.wizard

        puts "health: #{character.instance_variable_get(:@health)}"
        puts "Damage: #{character.attack_damage}"
        puts "defence: #{character.defence}"
        puts "heal: #{character.heal}"
      end

      def healers
        character = Characters.new(false, false, false, true, 0, 0, 0, 0)
        character.healer

        puts "health: #{character.instance_variable_get(:@health)}"
        puts "Damage: #{character.attack_damage}"
        puts "defence: #{character.defence}"
        puts "heal: #{character.heal}"
      end


      puts "\nINTRUCCIONES:"
      puts "Es un juego de turno con Personajes con atributos unicos, decida las mejores opciones para ganar\n"
      puts "Estadisticas de Personajes a elegir"
      puts "\nTank"
      tanks
      puts "\nAssasin"
      assasins
      puts "\nWizard"
      wizards
      puts "\nHealer"
      healers
      puts "\n"
      puts "Jugador 1"
      puts "Eliga una opcion: "
      puts "\n1.- Tank"
      puts "\n2.- Assasin"
      puts "\n3.- Wizard"
      puts "\n4.- Healer"

      puts "\nJugador 1:"
      playerchoice_1 = gets.chomp.to_i

      puts "\nJugador 2: "
      playerchoice_2 = gets.chomp.to_i


      if playerchoice_1 == 1
        player_1 = Characters.new(true, false, false, false, 0, 0, 0, 0)
        puts "\njugador 1 ha elegido a TANQUE"
        player_1.tank
      elsif playerchoice_1 == 2
        player_1 = Characters.new(false, true, false, false, 0, 0, 0, 0)
        puts "\njugador 1 ha elegido a ASESINO"
        player_1.assasin
      elsif playerchoice_1 == 3
        player_1 = Characters.new(false, false, true, false, 0, 0, 0, 0)
        puts "\njugador 1 ha elegido a MAGO"
        player_1.wizard
      elsif playerchoice_1 == 4
        player_1 = Characters.new(false, false, false, true, 0, 0, 0, 0)
        puts "\njugador 1 ha elegido a CURANDERO"
        player_1.healer
      end

      if playerchoice_2 == 1
        player_2 = Characters.new(true, false, false, false, 0, 0, 0, 0)
        puts "\njugador 2 ha elegido a TANQUE"
        player_2.tank
      elsif playerchoice_2 == 2
        player_2 = Characters.new(false, true, false, false, 0, 0, 0, 0)
        puts "\njugador 2 ha elegido a ASESINO"
        player_2.assasin
      elsif playerchoice_2 == 3
        player_2 = Characters.new(false, false, true, false, 0, 0, 0, 0)
        puts "\njugador 2 ha elegido a MAGO"
        player_2.wizard
      elsif playerchoice_2 == 4
        player_2 = Characters.new(false, false, false, true, 0, 0, 0, 0)
        puts "\njugador 2 ha elegido a CURANDERO"
        player_2.healer
      end

      fight(player_1, player_2)

      puts "\n¿Buscan la revancha? si/no : "
      replay = gets.chomp

      if replay == "si"
        main
      else
        puts "¡¡¡GRACIAS POR JUGAR!!!"
      end
    end
  main
