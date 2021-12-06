import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IButtonProps } from '../../types';
import styles from './styles';

export default function Button({onClick, type}: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{[type[0].toUpperCase(), type.substr(1)]}</Text>
    </TouchableOpacity>
  );
}
