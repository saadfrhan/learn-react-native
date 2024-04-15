import React from 'react';
import {Text} from 'react-native';

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return `${firstName} ${secondName} ${thirdName}`;
};

export default function Cat() {
  return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}</Text>;
}
