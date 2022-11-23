import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

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
    this._dexterity = Math.ceil((Math.random() * 10));
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.ceil((Math.random() * 10));
    this._defense = Math.ceil((Math.random() * 10));
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
    if (this.lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += 1;
    this._strength += 1;
    this._dexterity += 1;
    this._defense += 1;
    if (this._energy) this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;