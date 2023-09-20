// type Team = {
//   name: string;
//   id: number;
// };

import Team, {Country} from './team';

type Player = {
  id: number;
  name: string;
  position: string;
  height: number;
  jerseyNumber: string;
  team: Team;
  preferredFoot: string;
  shortName: string;
  country: Country;
  dateOfBirthTimestamp: number;
  contractUntilTimestamp: number;
  proposedMarketValue: number;
};

export type PlayerType = {
  player: Player;
};
