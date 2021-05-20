import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationModel } from '../../model/StackNavigationModel';
import { DrawerNavigationModel } from '../../model/DrawerNavigationModel';
import useAsyncStorage from '../../hooks/useAsyncStorage';

interface Props {
  navigation: StackNavigationProp<StackNavigationModel>
}

const HomeScreen = ({navigation}:Props) => {
  const [storageResult, useStorage] = useAsyncStorage({
    type:'', key: '', value: ''
  })
  
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button 
        title="go detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button 
        title="setStorage"
        onPress={() => useStorage({type:'SET', key: 'test', value: 'testValue'})}
      />
      <Button 
        title="getStorage"
        onPress={() => useStorage({type:'GET', key: 'test'})}
      />
      <Text>{storageResult}</Text>
    </View>
  )
}

export default HomeScreen;