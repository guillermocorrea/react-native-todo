import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddItem from './components/AddItem';
// import { uuid } from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import { Item } from './item.model';

const defaultItems: Item[] = [
  { id: 1, text: 'Milk' },
  { id: 2, text: 'Eggs' },
  { id: 3, text: 'Bread' },
  { id: 4, text: 'Juice' },
];

let lastId = defaultItems.length;

const App = () => {
  const [items, setItems] = useState(defaultItems);

  const deleteItem = (id: number) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text: string) => {
    const item: Item = {
      id: ++lastId,
      text,
    };
    setItems((prevState) => {
      return prevState.concat(item);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Custom Title" />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
