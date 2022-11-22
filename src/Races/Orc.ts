import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _Orcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._Orcs += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() : number {
    return Orc._Orcs;
  }
}

export default Orc;