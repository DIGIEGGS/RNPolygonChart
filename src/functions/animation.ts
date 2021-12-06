import { Animated, Easing } from 'react-native';
import { IAnimationProps, IPole } from '../types';

export const useAnimation = ({
  duration,
  value,
  easing,
  delay,
}: IAnimationProps) =>
  Animated.timing(value, {
    toValue: 1,
    useNativeDriver: true,
    delay: delay ?? 0,
    duration: duration ?? 500,
    easing: easing ?? Easing.out(Easing.cubic),
  });
