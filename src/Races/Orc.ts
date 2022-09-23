import Race from './Race';
import LifePoints from './utils';

export default class Orc extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = LifePoints.Orc;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Orc._createdInstances += 1;
    return Orc._createdInstances;
  }
}