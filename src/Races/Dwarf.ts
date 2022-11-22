import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _Dwarfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._Dwarfs += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._Dwarfs;
  }
}

export default Dwarf;