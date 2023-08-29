class Character {
  life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this.life;
  }
  set life(newLife) {
    this.life = newLife < 0 ? 0 : newLife;
  }
}

class Ninja extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 18;
    this.defense = 5;
    this.maxLife = this.life;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 13;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class Orche extends Character {
  constructor() {
    super('Orche');
    this.life = 100;
    this.attack = 4;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class KingZombie extends Character {
  constructor() {
    super('King Zombie');
    this.life = 130;
    this.attack = 20;
    this.defense = 4;
    this.maxLife = this.life;
  }
}

class Stage {

  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;
  }

  start() {
    this.update();
    // TODO: Evento do botão atacar.

    this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

  }
  
  update() {
    // Fighter 1
    this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} __ ${this.fighter1.life.toFixed(1)} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;
    this.fighter1El.querySelector('.bar').style.backgroundColor = '#00ff45';

    // Fighter 2
    this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} __ ${this.fighter2.life.toFixed(1)} HP`;;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    this.fighter2El.querySelector('.bar').style.backgroundColor = '#00ff45';
  }

  doAttack(attacking, attacked) {
  if(attacking.life <= 0 || attacked.life <= 0) {
    this.log.addMessage(`Já está morto :(`);
    return;
  }
  
  let attackFactor = (Math.random() * 2).toFixed(2);
  let defenseFactor = (Math.random() * 2).toFixed(2);

  let actualAttack = attacking.attack * attackFactor;
  let actualDefense = attacked.attack * defenseFactor;

  if(actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      this.log.addMessage(`${attacking.name} atacou ${attacked.name} e causou ${actualAttack.toFixed(2)} de dano`);
    } else {
      this.log.addMessage(`${attacked.name} conseguiu defender...`);
    }

    this.update();
  }
}

class Log {
  list = [];

  constructor(listEl) {
    this.listEl = listEl;
  }

  addMessage(msg) {
    this.list.unshift(msg);
    this.render();
  }

  render() {
    this.listEl.innerHTML = '';
    
    for(let i in this.list) {
      this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}