import 'react-native-gesture-handler';
// In App.js in a new project
import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import TodoScreen from './Todo';
import DoingScreen from './Doing';
import AllScreen from './AllTasks';

function HeaderBar() {
  const navigation = useNavigation();

  return (
    <View
      style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="All"
        onPress={() => {
          navigation.navigate('AllTasks');
        }}
      />
      <Button title="Todo" onPress={() => navigation.navigate('Todo')} />
      <Button title="Doing" onPress={() => navigation.navigate('Doing')} />
    </View>
  );
}

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: props => <HeaderBar {...props} />}}
        />
        <Stack.Screen
          name="AllTasks"
          component={AllScreen}
          options={{headerTitle: props => <HeaderBar {...props} />}}
        />

        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{headerTitle: props => <HeaderBar {...props} />}}
        />

        <Stack.Screen
          name="Doing"
          component={DoingScreen}
          options={{headerTitle: props => <HeaderBar {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
