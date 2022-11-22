import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mages = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    
    Mage._mages += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Mage._mages;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }
}

export default Mage;