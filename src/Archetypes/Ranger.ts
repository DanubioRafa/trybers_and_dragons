import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangers = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger._rangers += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._rangers;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }
}

export default Ranger;