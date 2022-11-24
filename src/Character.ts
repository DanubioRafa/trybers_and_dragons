import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy?: Energy;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this._race = new Elf(name, getRandomInt(1, 10));
    this._dexterity = this.race.dexterity;
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.ceil((Math.random() * 10)), 
    };
  }
  
  public get race() : Race {
    return this._race;
  }
  
  public get archetype() : Archetype {
    return this._archetype;
  }
  
  public get lifePoints() : number {
    return this._lifePoints;
  }
  
  public get strength() : number {
    return this._strength;
  }
  
  public get defense() : number {
    return this._defense;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }
  
  public get energy() : Energy | undefined {
    const newEnergy = { ...this._energy } as typeof this._energy;

    return newEnergy;
  }

  public receiveDamage(attackPoints: number): number {
    const damageLessDefense: number = attackPoints - this._defense;

    if (damageLessDefense > 0) this._lifePoints -= damageLessDefense;
    if (damageLessDefense <= 0) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._energy) this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;