import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _Elfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._Elfs += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._Elfs;
  }
}

export default Elf;