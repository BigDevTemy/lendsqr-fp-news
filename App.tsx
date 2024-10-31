/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer,NavigationContainerProps } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/welcome'
import onBoardingScreen from './src/screens/onboarding'
import SignIn from './src/screens/Signin'
import SignUp from './src/screens/Signup'
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

function App(): React.JSX.Element {
  
 
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={onBoardingScreen}
          options={{title: 'Welcome',headerShown:false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Signin',headerShown:false}}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Signup',headerShown:false}}
      

        />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
