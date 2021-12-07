import { Alert } from 'react-native';
import { IInfoStyleProps, IPolygonLayerProps } from '../types';
import { black, blue, green, pink } from './colors';

export const triangle: IPolygonLayerProps = {
  type: 'triangle',
  poles: [
    {
      score: 0.8,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.6,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.9,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};

export const tetragon: IPolygonLayerProps = {
  type: 'tetragon',
  poles: [
    {
      score: 0.7,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.6,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.9,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.3,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};

export const pentagon: IPolygonLayerProps = {
  type: 'pentagon',
  poles: [
    {
      score: 0.7,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.6,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.9,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.3,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 0.8,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};

export const hexagon: IPolygonLayerProps = {
  type: 'hexagon',
  poles: [
    {
      score: 0.7,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {text: 'First'},
    },
    {
      score: 0.6,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {
        text: 'Second',
        style: {
          borderColor: black,
          borderWidth: 1,
          borderRadius: 20,
          height: 40,
          justifyContent: 'center',
          paddingHorizontal: 10,
          position: 'absolute',
        },
        onPress: () => Alert.alert('Sixth info item pressed.'),
      },
    },
    {
      score: 0.9,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {text: 'Third', textStyle: {fontSize: 30}},
    },
    {
      score: 0.3,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {text: 'Fourth', textStyle: {color: pink, fontWeight: '700'}},
    },
    {
      score: 0.9,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {text: 'Fifth', textStyle: {color: blue}},
    },
    {
      score: 1,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {text: 'Sixth'},
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};

export const initialInfoStyleProps: IInfoStyleProps = {
  infoCoordinates: {x: 0, y: 0},
  infoTextOffset: {x: 0, y: 0},
  infoTextSize: {x: 0, y: 0},
  size: 0,
};
