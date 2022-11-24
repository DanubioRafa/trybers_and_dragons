import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    protected player: Character | Fighter,
    protected monsters: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  private attacks(monster: Monster | Fighter | SimpleFighter) {
    if (this.player.lifePoints > 0) {
      this.player.attack(monster);
    }
    if (monster.lifePoints > 0) {
      monster.attack(this.player);
    }
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.attacks(monster);
      }
    });
    return super.fight();
    /* return this.player.lifePoints > 0 ? 1 : -1; */
  }
}

export default PVE;