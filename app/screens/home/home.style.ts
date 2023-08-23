import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const MyText = styled(MainText)`
  font-size: 32px;
  color: ${props => props.theme.text};
`;
