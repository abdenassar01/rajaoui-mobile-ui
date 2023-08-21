/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ThemeType} from '../theme';
import {IconWrapper, Label} from './styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  focused: boolean;
  label: string;
  icon: string;
  theme: ThemeType;
};

export default function NavigationIcon({focused, label, icon, theme}: Props) {
  return (
    <IconWrapper
      style={{
        paddingTop: focused ? 10 : 0,
        // backgroundColor: theme.text,
        bottom: focused ? 5 : 0,
      }}>
      <Icon
        name={icon}
        size={focused ? 25 : 20}
        color={focused ? theme.secondary : '#748c94'}
      />
      <Label style={{color: focused ? theme.secondary : '#748c94'}}>
        {label}
      </Label>
    </IconWrapper>
  );
}
