class Characters
    attr_accessor :tank, :assasin, :wizard, :healer, :attack_damage, :defence, :heal

    def initialize(tank, assasin, wizard, healer, attack_damage, health, defence, heal)
      @tank = tank
      @assasin = assasin
      @wizard = wizard
      @healer = healer
      @health = health
      @attack_damage = attack_damage
      @defence = defence
      @heal = heal
    end

    def tank
      @health = 150
      @attack_damage = 10
      @defence = 30
      @heal = 10
    end

    def assasin
      @health = 80
      @attack_damage = 25
      @defence = 10
      @heal = 10
    end

    def wizard
      @health = 100
      @attack_damage = 20
      @defence = 20
      @heal = 10
    end

    def healer
      @health = 100
      @attack_damage = 15
      @defence = 15
      @heal = 25
    end

    def get
      @health
    end
  end
