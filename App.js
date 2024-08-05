import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';   
 // Ensure correct import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import rootReducer   from './src/reducers';
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply thunk middleware

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">   

          <Stack.Screen name="Main" component={MainScreen}   
 />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>   

    </Provider>
  );
};

export default App;