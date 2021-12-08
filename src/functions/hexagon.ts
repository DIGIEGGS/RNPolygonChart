import { ICoordinatePoleArgs, ICoordinateScoreArgs, IFinalPoleResult } from '../types';
import { cos, sin } from './utility';

export const coordinateGuidePoles = ({
  length,
  array,
}: ICoordinatePoleArgs): Array<IFinalPoleResult> => {
  return array.map((v, i) => {
    switch (i) {
      case 0:
        return {...v, end: {x: length, y: 0}};
      case 1:
        return {
          ...v,
          end: {
            x: length * (1 - sin(60)),
            y: length * (1 - cos(60)),
          },
        };
      case 2:
        return {
          ...v,
          end: {
            x: length * (1 - sin(60)),
            y: length * (1 + sin(30)),
          },
        };
      case 3:
        return {
          ...v,
          end: {
            x: length,
            y: 2 * length,
          },
        };
      case 4:
        return {
          ...v,
          end: {
            x: length * (1 + sin(60)),
            y: length * (1 + sin(30)),
          },
        };
      case 5:
        return {
          ...v,
          end: {
            x: length * (1 + sin(60)),
            y: length * (1 - cos(60)),
          },
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
            x: length * (1 - sin(60) * score),
            y: length * (1 - cos(60) * score),
          },
        };
      case 2:
        return {
          ...v,
          end: {
            x: length * (1 - sin(60) * score),
            y: length * (1 + sin(30) * score),
          },
        };
      case 3:
        return {
          ...v,
          end: {
            x: length,
            y: length * (1 + score),
          },
        };
      case 4:
        return {
          ...v,
          end: {
            x: length * (1 + sin(60) * score),
            y: length * (1 + sin(30) * score),
          },
        };
      case 5:
        return {
          ...v,
          end: {
            x: length * (1 + sin(60) * score),
            y: length * (1 - cos(60) * score),
          },
        };
      default:
        return {...v};
    }
  });
};
