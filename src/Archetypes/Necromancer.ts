import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancers = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer._necromancers += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._necromancers;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }
}

export default Necromancer;