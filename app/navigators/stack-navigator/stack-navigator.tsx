import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../../screens/tabs/settings/settings';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Players" component={<Settings />} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
