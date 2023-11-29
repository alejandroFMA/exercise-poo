class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log('Vida restante: ' + this.life);
    }
}

class Maya extends Warrior {
 

    drinkColaCao() {
        this.power += 10;
    }
}

class Aztec extends Warrior {


    drinkNesquik() {
        this.life += 10;
    }
}
let aztec = new Aztec(100, 15);
let maya = new Maya(100, 20);

aztec.drinkNesquik(); 
maya.drinkColaCao();
aztec.defend(maya.attack());

maya.defend(aztec.attack());
