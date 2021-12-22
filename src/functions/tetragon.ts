import { ICoordinatePoleArgs, ICoordinateScoreArgs, IFinalPoleResult } from '../types';

export const coordinateGuidePoles = ({
  array,
  length,
}: ICoordinatePoleArgs): Array<IFinalPoleResult> => {
  return array.map((v, i) => {
    switch (i) {
      case 0:
        return { ...v, end: { x: length, y: 0 } };
      case 1:
        return { ...v, end: { x: 0, y: length } };
      case 2:
        return { ...v, end: { x: length, y: length * 2 } };
      case 3:
        return { ...v, end: { x: length * 2, y: length } };
      default:
        return { ...v };
    }
  });
};

export const coordinateScorePoles = ({
  array,
  length,
  multiplier,
}: ICoordinateScoreArgs): Array<IFinalPoleResult> => {
  return array.map((v, i) => {
    const score = v.score * multiplier;

    switch (i) {
      case 0:
        return { ...v, end: { x: length, y: length * (1 - score) } };
      case 1:
        return {
          ...v,
          end: { x: length * (1 - score), y: length },
        };
      case 2:
        return {
          ...v,
          end: { x: length, y: length * (1 + score) },
        };
      case 3:
        return {
          ...v,
          end: { x: length * (1 + score), y: length },
        };
      default:
        return { ...v };
    }
  });
};
