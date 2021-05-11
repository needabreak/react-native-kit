import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationModel } from '../../model/StackNavigationModel';
import { DrawerNavigationModel } from '../../model/DrawerNavigationModel';

interface Props {
  navigation: DrawerNavigationProp<DrawerNavigationModel>
}

const HomeScreen = ({navigation}:Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button 
        title="go detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export default HomeScreen;