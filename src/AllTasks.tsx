import * as React from 'react';
import {View, FlatList, Button} from 'react-native';
import Task from './Task';
import {useState} from 'react';
import store from './store';
import {useFocusEffect} from '@react-navigation/native';

function AllScreen() {
  const [tasks, setTasks] = useState(store.getState());

  const handleDelete = id => {
    store.dispatch({type: 'REMOVE_TASK', itemId: id});
    forceTaskUpdate();
  };
  const forceTaskUpdate = () => {
    setTasks(() => store.getState());
  };
  const handleAdd = () => {
    store.dispatch({type: 'ADD_TASK'});
    forceTaskUpdate();
  };

  const footer = () => {
    return (
      <View>
        <Button title="Ajouter" onPress={handleAdd} />
      </View>
    );
  };
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <Task
          item={item}
          onDelete={handleDelete}
          updateState={forceTaskUpdate}
        />
      )}
      keyExtractor={item => item.id}
      ListFooterComponent={footer}
    />
  );
}
export default AllScreen;
