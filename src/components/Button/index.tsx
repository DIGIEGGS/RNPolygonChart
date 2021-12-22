import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getButtonText } from '../../functions/utility';
import { IButtonProps } from '../../types';
import styles from './styles';

const Button = ({ onPress, type }: IButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{getButtonText(type)}</Text>
  </TouchableOpacity>
);

export default Button;
