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
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
 HomeScreen,
 DetailScreen
} from './src/pages/screens'

import useAsyncStorage from './src/hooks/useAsyncStorage';

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

  // const setData = async (key: string, value: string|object) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem(key, jsonValue);
  //   } catch (error) {
  //     console.log('## error : ', error);
  //   } 
  // }

  // const getData = async (key: string, value: string) => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem(key);
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (error) {
  //     console.log('## error : ', error);
  //   }
  // }

  // const [result, setAsyncStorageValue] = useAsyncStorage({
  //   type: '',
  //   key: '',
  //   value: ''
  // });

  // let param = {
  //   type: 'SET',
  //   key: 'testKey',
  //   value: 'testValue'
  // }
  // setAsyncStorageValue(param);
  // setAsyncStorageValue({
  //   type: 'GET',
  //   key: 'testKey',
  //   value: 'testValue'
  // })
  // console.log('## result : ' , result);


  const RootNavigation: React.FC = () => {
   return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator> 
   )
  }

  const CustomSideBar = (props: any) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          title="Menu1" 
          onPress={() => console.log('test1')}
        />
        <Button 
          title="Menu2" 
          onPress={() => console.log('test2')}
        />
      </View>
    )
  }

  return (
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
       <Drawer.Screen 
        name="Root" 
        component={RootNavigation} 
        options={{gestureEnabled: false}}
      />
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
