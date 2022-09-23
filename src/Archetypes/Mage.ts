import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _dano: EnergyType;
  private static _archetypeInstancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._dano = 'mana';
  }

  get energyType(): EnergyType {
    return this._dano;
  }

  public static createdArchetypeInstances(): number {
    Mage._archetypeInstancesNumber += 1;
    return Mage._archetypeInstancesNumber;
  }
}