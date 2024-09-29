import 'react-native-gesture-handler'; // Necessário para o drawer
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //Este componente é o contêiner principal para gerenciar o estado da navegação em seu aplicativo. Ele deve envolver todos os navegadores que você cria.
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/Profile';
import SettingsScreen from './src/screens/Settings';

// Criação de navegadores
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={TabsNavigator} options={{ title: '' }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//Define um navegador de pilha que contém duas telas: HomeScreen e DetailsScreen.
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  );
}

//Define um navegador de abas com duas abas: uma que apresenta o HomeStack (que inclui as telas de Home e Details) e outra que apresenta ProfileScreen.
function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'HomeStack', headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


