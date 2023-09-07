import {createStackNavigator} from '@react-navigation/stack';
import Players from '../../screens/stack/players/Players';
import TabNavigator from '../tab-navigator/tab-navigator';

const Stack = createStackNavigator();

type Props = {
  toggleTheme: () => void;
  theme: ThemeType;
};

function StackNavigator({toggleTheme, theme}: Props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Player" component={Players} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
