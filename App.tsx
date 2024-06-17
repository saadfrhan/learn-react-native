import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const names = [
  'Devin',
  'Dan',
  'Dominic',
  'Jackson',
  'James',
  'Joel',
  'John',
  'Jillian',
  'Jimmy',
  'Julie',
];

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={names.map(name => {
          return {key: name};
        })}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
