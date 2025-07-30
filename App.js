import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from './screens/RegistrationScreen';
import GoalScreen from './screens/GoalScreen';
import WeightHeightScreen from './screens/WeightHeightScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="WeightHeight" component={WeightHeightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
