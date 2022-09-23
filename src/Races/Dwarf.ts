import Race from './Race';
import LifePoints from './utils';

export default class Dwarf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = LifePoints.Dwarf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Dwarf._createdInstances += 1;
    return Dwarf._createdInstances;
  }
}