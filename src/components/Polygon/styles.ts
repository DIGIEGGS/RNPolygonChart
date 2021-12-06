import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = (size: number) =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: size,
          height: size,
          justifyContent: 'center',
        },
      }),
    [size],
  );

export default useStyles;
