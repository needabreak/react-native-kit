/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
 HomeScreen,
 DetailScreen
} from './src/pages/screens'

import { StackNavigationModel } from './src/model/StackNavigationModel';
import { DrawerNavigationModel } from './src/model/DrawerNavigationModel';

const Stack = createStackNavigator<StackNavigationModel>();
const Drawer = createDrawerNavigator<DrawerNavigationModel>();

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const RootNavigation = () => {
   return (
     <Stack.Navigator screenOptions={{}}>
       <Stack.Screen name="Root" component={HomeScreen} />
       <Stack.Screen name="Detail" component={DetailScreen} />
     </Stack.Navigator> 
   )
  }

 //  const LoginNavigation = () => {
 //    return (
 //      <Stack.Navigator>
 //        <Stack.Screen />
 //        <Stack.Screen />
 //      </Stack.Navigator>
 //    )
 //  }

  const CustomSideBar = (props: any) => {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>asdf</Text>
     </View>
    )
  }

  return (
   //  <SafeAreaView style={backgroundStyle}>
   //    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
   //    <HomeScreen />
   //  </SafeAreaView>
   <NavigationContainer>
     <Drawer.Navigator 
       initialRouteName="Root"
       drawerContent={(props) => <CustomSideBar {...props}/>}
     >
       {/* {
         isLogin 
         ?
           <Drawer.Screen name="Root" component={RootNavigation} />
         :
           <Drawer.Screen name="Login" component={} />
       } */}
       <Drawer.Screen name="Root" component={RootNavigation} />
     </Drawer.Navigator>
   </NavigationContainer>
  );
};

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
