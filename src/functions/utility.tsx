import React from 'react';
import { LayoutChangeEvent, Text, TouchableOpacity } from 'react-native';
import { Line } from 'react-native-svg';
import { black } from '../style/colors';
import { ICoordinate, IFinalPoleResult, IInfoLayout, IOffset, IPole, PoleType } from '../types';

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

export const generateInfo = (
  info: Array<IFinalPoleResult>,
  overallOffset: IOffset,
) => {
  return info.map(
    (v, i) =>
      v.end && (
        <TouchableOpacity
          key={i}
          onPress={v.info?.onPress}
          style={{
            position: 'absolute',
            left:
              (v.end.x ?? 0) +
              (overallOffset.x ?? 0) +
              (v.info?.offset?.x ?? 0),
            top:
              (v.end.y ?? 0) +
              (overallOffset.y ?? 0) +
              (v.info?.offset?.y ?? 0),
          }}>
          <Text style={v.info?.textStyle}>{v.info?.text}</Text>
        </TouchableOpacity>
      ),
  );
};
