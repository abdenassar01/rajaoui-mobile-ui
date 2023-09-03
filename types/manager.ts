import Team from './team';

type Country = {
  name: string;
  alpha2: string;
};

type Performance = {
  total: number;
  wins: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsConceded: number;
  totalPoints: number;
};

export type ManagerType = {
  name: string;
  id: number;
  shortName: string;
  country: Country;
  preferredFormation: string;
  team: Team;
  teams: Team[];
  nationalityISO2: string;
  nationality: string;
  dateOfBirthTimestamp: number;
  performance: Performance;
};
