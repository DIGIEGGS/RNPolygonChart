import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Line } from 'react-native-svg';
import { black } from '../style/colors';
import { ICoordinate, IFinalPoleResult, IPole, PoleType } from '../types';

export const useLayout = (
  event: LayoutChangeEvent,
  callback: (value: number, offset: ICoordinate) => void,
) => {
  const viewMeasure = event.nativeEvent.layout;
  const array = [viewMeasure?.width ?? 0, viewMeasure?.height ?? 0].filter(
    f => f !== 0,
  );

  let len = array.length > 0 ? Math.min(...array) : 0;

  callback(len / 2, {
    x: (viewMeasure.width - len) / 2,
    y: (viewMeasure.height - len) / 2,
  });
};

export const finalizePole = (poles: Array<IPole>): Array<IPole> => {
  return poles.map(v => {
    return {
      ...v,
      stroke: {
        stroke: v.stroke?.stroke ?? black,
        opacity: v.stroke?.opacity ?? 1,
        strokeWidth: v.stroke?.strokeWidth ?? 1,
      },
      innerStroke: {
        stroke: v.innerStroke?.stroke ?? black,
        opacity: v.innerStroke?.opacity ?? 1,
        strokeWidth: v.innerStroke?.strokeWidth ?? 1,
      },
    };
  });
};

const degToRad = (degrees: number): number => (degrees * Math.PI) / 180;

export const sin = (degrees: number): number => Math.sin(degToRad(degrees));
export const cos = (degrees: number): number => Math.cos(degToRad(degrees));

export const generateLines = (
  poles: Array<IFinalPoleResult>,
  length: number,
  poleType: PoleType = 'guide',
) =>
  poles.map(
    (v, i) =>
      v.end && (
        <Line
          key={`${i}`}
          x1={length}
          y1={length}
          x2={v.end?.x}
          y2={v.end?.y}
          {...(poleType === 'score' ? v.innerStroke : v.stroke)}
        />
      ),
  );

export const generatePolygonPoints = (poles: Array<IFinalPoleResult>) =>
  poles.map(v => `${v.end?.x ?? 0},${v.end?.y ?? 0}`).join(' ');
