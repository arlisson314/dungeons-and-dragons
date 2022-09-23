import Race from './Race';
import LifePoints from './utils';

export default class Halfling extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = LifePoints.Halfling;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Halfling._createdInstances += 1;
    return Halfling._createdInstances;
  }
}