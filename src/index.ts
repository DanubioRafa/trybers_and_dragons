import { randomInt } from 'crypto';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Halfling } from './Races';

const player1 = new Character('Veigar', new Dwarf('Veigar', randomInt(1, 10)));
const player2 = new Character('Ahri', new Halfling('Ahri', randomInt(1, 10)));
const player3 = new Character('Janna');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player1, player2);

const pve = new PVE(player3, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { monster1, monster2, pvp, pve, runBattles };