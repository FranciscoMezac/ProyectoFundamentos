export class Character{
    constructor(tank, assasin, wizard, healer, attack_damage, health, defence, heal) {
    this.tank = tank;
    this.assasin = assasin;
    this.wizard = wizard;
    this.healer = healer;
    this.attack_damage = attack_damage;
    this.__health = health;
    this.defence = defence;
    this.heal = heal;
    }

    Tank() {
        this.__health = 150;
        this.attack_damage = 10;
        this.defence = 30;
        this.heal = 10;
    }
    
    Assasin() {
        this.__health = 80;
        this.attack_damage = 25;
        this.defence = 10;
        this.heal = 10;
    }
    
    Wizard() {
        this.__health = 100;
        this.attack_damage = 20;
        this.defence = 20;
        this.heal = 10;
    }
    
    Healer() {
        this.__health = 100;
        this.attack_damage = 15;
        this.defence = 15;
        this.heal = 25;
    }
    
    get() {
        return this.__health;
    }
}
