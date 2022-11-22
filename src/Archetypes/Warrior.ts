import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriors = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior._warriors += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._warriors;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }
}

export default Warrior;