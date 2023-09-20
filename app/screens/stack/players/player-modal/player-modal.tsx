import React from 'react';
import {Text} from 'react-native';
import {PlayerWrapper} from './player-modal.style';
import Modal from 'react-native-modal';
import {PlayerType} from '../../../../../types/player';

type Props = {
  isVisible: boolean;
  player: PlayerType;
};

const PlayerModal = ({player, isVisible}: Props) => {
  return (
    <Modal isVisible={isVisible}>
      <PlayerWrapper></PlayerWrapper>
      <Text>player-modal: {player.player.name}</Text>
    </Modal>
  );
};

export default PlayerModal;
