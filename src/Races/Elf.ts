import Race from './Race';
import LifePoints from './utils';

export default class Elf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = LifePoints.Elf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Elf._createdInstances += 1;
    return Elf._createdInstances;
  }
}