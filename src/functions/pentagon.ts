import { ICoordinatePoleArgs, ICoordinateScoreArgs, IFinalPoleResult, IPole } from '../types';
import { cos, sin } from './utility';

export const coordinateGuidePoles = ({
  array,
  length,
}: ICoordinatePoleArgs): Array<IFinalPoleResult> => {
  return array.map((v, i) => {
    switch (i) {
      case 0:
        return {...v, end: {x: length, y: 0}};
      case 1:
        return {
          ...v,
          end: {x: length * (1 - sin(72)), y: length * (1 - cos(72))},
        };
      case 2:
        return {
          ...v,
          end: {x: length * (1 - sin(36)), y: length * (1 + cos(36))},
        };
      case 3:
        return {
          ...v,
          end: {x: length * (1 + sin(36)), y: length * (1 + cos(36))},
        };
      case 4:
        return {
          ...v,
          end: {x: length * (1 + sin(72)), y: length * (1 - cos(72))},
        };
      default:
        return {...v};
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
        return {...v, end: {x: length, y: length * (1 - score)}};
      case 1:
        return {
          ...v,
          end: {
            x: length * (1 - sin(72) * score),
            y: length * (1 - cos(72) * score),
          },
        };
      case 2:
        return {
          ...v,
          end: {
            x: length * (1 - sin(36) * score),
            y: length * (1 + cos(36) * score),
          },
        };
      case 3:
        return {
          ...v,
          end: {
            x: length * (1 + sin(36) * score),
            y: length * (1 + cos(36) * score),
          },
        };
      case 4:
        return {
          ...v,
          end: {
            x: length * (1 + sin(72) * score),
            y: length * (1 - cos(72) * score),
          },
        };
      default:
        return {...v};
    }
  });
};
