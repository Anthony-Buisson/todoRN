import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Accueil</Text>
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
};

export default Home;
