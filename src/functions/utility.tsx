import React, { useCallback, useMemo, useState } from 'react';
import { LayoutChangeEvent, Text, TouchableOpacity } from 'react-native';
import { Line } from 'react-native-svg';
import { black } from '../style/colors';
import {
    ICoordinatePoleArgs, ICoordinateScoreArgs, IFinalPoleResult, IOffset, IPole,
    IUseComponentSizeResult, PoleType, PolygonType
} from '../types';
import {
    coordinateGuidePoles as hexagonGuides, coordinateScorePoles as hexagonScores
} from './hexagon';
import {
    coordinateGuidePoles as pentagonGuides, coordinateScorePoles as pentagonScores
} from './pentagon';
import {
    coordinateGuidePoles as tetragonGuides, coordinateScorePoles as tetragonScores
} from './tetragon';
import {
    coordinateGuidePoles as triangleGuides, coordinateScorePoles as triangleScores
} from './triangle';

export const useCoordinateGuidePoles = (
  props: ICoordinatePoleArgs,
  type: PolygonType,
): Array<IFinalPoleResult> =>
  useMemo(() => {
    switch (type) {
      case 'triangle':
        return triangleGuides(props);
      case 'tetragon':
        return tetragonGuides(props);
      case 'pentagon':
        return pentagonGuides(props);
      case 'hexagon':
        return hexagonGuides(props);
      default:
        return triangleGuides(props);
    }
  }, [props, type]);

export const useCoordinateScorePoles = (
  props: ICoordinateScoreArgs,
  type: PolygonType,
): Array<IFinalPoleResult> =>
  useMemo(() => {
    switch (type) {
      case 'triangle':
        return triangleScores(props);
      case 'tetragon':
        return tetragonScores(props);
      case 'pentagon':
        return pentagonScores(props);
      case 'hexagon':
        return hexagonScores(props);
      default:
        return triangleScores(props);
    }
  }, [props, type]);

export const useComponentSize: () => IUseComponentSizeResult = () => {
  const [size, setSize] = useState<number>();
  const [offset, setOffset] = useState<IOffset>();

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    const min = Math.min(...[width, height].filter(f => f !== 0));

    setSize(min);
    setOffset({ x: width - min, y: height - min });
  }, []);

  return { size, offset, onLayout };
};

export const finalizePole = (poles: Array<IPole>): Array<IPole> =>
  poles.map(v => ({
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
  }));

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

export const generateInfo = (info: Array<IFinalPoleResult>, overallOffset: IOffset) =>
  info.map(
    (v, i) =>
      v.end && (
        <TouchableOpacity
          key={`to${i}`}
          onPress={v.info?.onPress}
          style={{
            position: 'absolute',
            left: (v.end.x ?? 0) + (overallOffset.x ?? 0) / 2 + (v.info?.offset?.x ?? 0),
            top: (v.end.y ?? 0) + (overallOffset.y ?? 0) / 2 + (v.info?.offset?.y ?? 0),
          }}
        >
          <Text key={`t${i}`} style={v.info?.textStyle}>
            {v.info?.text}
          </Text>
        </TouchableOpacity>
      ),
  );

export const getButtonText = (type: PolygonType) =>
  [type[0].toUpperCase(), type.substring(1)].join('');
