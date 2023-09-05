import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../../screens/settings/settings';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Players" component={<Settings />} />
    </Stack.Navigator>
  );
}
