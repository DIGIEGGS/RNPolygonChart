import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getButtonText } from '../../functions/utility';
import { IButtonProps } from '../../types';
import styles from './styles';

export default function Button({onPress, type}: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{getButtonText(type)}</Text>
    </TouchableOpacity>
  );
}
