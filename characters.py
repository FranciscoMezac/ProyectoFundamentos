class Characters:

    def __init__(self, tank, assasin, wizard, healer, attack_damage, health, defence, heal):
        self.tank = tank
        self.assasin = assasin
        self.wizard = wizard
        self.healer = healer
        self.attack_damage = attack_damage
        self.__health = health
        self.defence = defence
        self.heal = heal

    def Tank(self):
        self.__health = 150
        self.attack_damage = 10
        self.defence = 30
        self.heal = 10

    def Assasin(self):
        self.__health = 80
        self.attack_damage = 25
        self.defence = 10
        self.heal = 10

    def Wizard(self):
        self.__health = 100
        self.attack_damage = 20
        self.defence = 20
        self.heal = 10

    def Healer(self):
        self.__health = 100
        self.attack_damage = 15
        self.defence = 15
        self.heal = 25

    def get(self):
        return self.__health
