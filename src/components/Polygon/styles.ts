import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ICoordinate, IInfoStyleProps } from '../../types';

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

export const useInfoStyles = ({
  size,
  infoCoordinates,
  infoTextOffset,
  infoTextSize,
}: IInfoStyleProps) =>
  StyleSheet.create({
    info: {
      position: 'absolute',
      left: infoCoordinates.x + infoTextOffset.x - infoTextSize.x / 2,
      top:
        infoCoordinates.y +
        infoTextOffset.y +
        (infoCoordinates.y > size ? 0 : -1) * infoTextSize.y,
      paddingVertical: 5,
    },
  });

export default useStyles;
