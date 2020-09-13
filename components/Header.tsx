import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header: React.FC<{ title?: string }> = ({ title = 'Shopping List' }: { title?: String }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 23,
  },
});

export default Header;
