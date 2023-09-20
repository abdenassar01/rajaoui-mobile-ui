export type SimplePlayer = {
  name: string;
  slug: string;
  shortName: string;
  position: string;
  id: string;
};

type TransferIterm = {
  player: SimplePlayer;
  fromTeamName: string;
  toTeamName: string;
  transferFee: string;
  transferFeeDescription: string;
  id: string;
  transferDateTimestamp: number;
};

export type TransfersType = {
  transfersIn: TransferIterm[];
  transfersOut: TransferIterm[];
};
