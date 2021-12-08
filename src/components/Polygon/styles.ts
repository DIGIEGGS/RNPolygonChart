import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = (size: number) =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: size * 2,
          height: size * 2,
          justifyContent: 'center',
        },
      }),
    [size],
  );

export default useStyles;
