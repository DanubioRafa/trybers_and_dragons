import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static _halflings = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflings += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._halflings;
  }
}

export default Halfling;