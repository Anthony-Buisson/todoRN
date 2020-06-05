import * as React from 'react';
import {View, FlatList, Button} from 'react-native';
import Task from './Task';
import {useState} from 'react';
import store from './store';

function DoingScreen() {
  const [tasks, setTasks] = useState(store.getState());
  const handleDelete = id => {
    store.dispatch({type: 'REMOVE_TASK', itemId: id});
    forceTaskUpdate();
  };
  const forceTaskUpdate = () => {
    setTasks(() => store.getState().filter(task => task.status === 1));
  };
  const handleAdd = () => {
    store.dispatch({type: 'ADD_TASK', status: 1});
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
      data={tasks.filter(task => task.status === 1)}
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
export default DoingScreen;
