import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _Player1: Fighter;
  private _Player2: Fighter;

  constructor(_Player1: Fighter, _Player2: Fighter) {
    super(_Player1);
    this._Player1 = _Player1;
    this._Player2 = _Player2;
  }

  public fight(): number {
    while (this._Player1.lifePoints > 0 && this._Player2.lifePoints > 0) {
      this._Player1.attack(this._Player2);
      this._Player2.attack(this._Player1);
    }
    return super.fight();
  }
}