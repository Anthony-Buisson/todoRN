import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const Task = ({item, onDelete, updateState}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState(item);
  const [url, setUrl] = useState(
    task.status === 0
      ? require('./static/next.png')
      : task.status === 1
      ? require('./static/check.png')
      : require('./static/done.png'),
  );

  const setTitle = text => {
    const nt = task;
    nt.title = text;
    setTask(nt);
  };
  const del = () => onDelete(task.id);

  const handleMove = () => {
    if (task.status < 2) {
      const tsk = task;
      tsk.status++;
      setTask(tsk);
      setUrl(() =>
        task.status === 0
          ? require('./static/next.png')
          : task.status === 1
          ? require('./static/check.png')
          : require('./static/done.png'),
      );
    }
    updateState();
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalText}
              onChangeText={text => setTitle(text)}>
              {task.title}
            </TextInput>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Sauvegarder</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={styles.textStyle}>{task.title}</Text>
            <TouchableOpacity onPress={handleMove} activeOpacity={0.5}>
              <Image
                style={{
                  backgroundColor: 'white',
                  borderRadius: 500,
                  width: 30,
                  height: 30,
                }}
                source={url}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: '#f0ad4e',
              width: 125,
              height: 30,
              marginLeft: 100,
            }}
            onPress={del}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 5,
              }}>
              SUPPR
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#337ab7',
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Task;
