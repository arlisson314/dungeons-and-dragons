import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _dano: EnergyType;
  private static _archetypeInstancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._dano = 'stamina';
  }

  get energyType(): EnergyType {
    return this._dano;
  }

  public static createdArchetypeInstances(): number {
    Ranger._archetypeInstancesNumber += 1;
    return Ranger._archetypeInstancesNumber;
  }
}