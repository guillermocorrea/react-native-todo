import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  addItem: (textValue: string) => void;
}

const AddItem: React.FC<Props> = ({ addItem }) => {
  const [text, setText] = useState('');
  const onChange = (textValue: string) => setText(textValue);
  const onAdd = () => {
    if (!text) {
      Alert.alert('Error', 'Please enter a message', [{ text: 'Ok' }]);
    } else {
      addItem(text);
      setText('');
    }
  };
  return (
    <View>
      <TextInput placeholder="Add Item..." value={text} style={styles.input} onChangeText={onChange} />
      <TouchableOpacity style={styles.btn} onPress={onAdd}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
