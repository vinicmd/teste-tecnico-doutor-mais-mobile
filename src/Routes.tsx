import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'
import { Course } from './screen/Course'
import { Home } from './screen/Home'
import { NewCourse } from './screen/NewCourse'


const Stack = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Course'
          component={Course}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='NewCourse'
          component={NewCourse}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
