import React from 'react';
import { Alert, Text } from 'react-native';
import { black, blue, green, pink } from '../style/colors';
import { IChartProps } from '../types';

export const triangle: IChartProps = {
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

export const tetragon: IChartProps = {
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

export const pentagon: IChartProps = {
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

export const hexagon: IChartProps = {
  poles: [
    {
      score: 0.7,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
      info: {text: <Text>First (JSX element)</Text>},
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
        onPress: () => Alert.alert('Second info item pressed.'),
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
      info: {
        text: 'Sixth (x: -100, y: -10)',
        offset: {x: -100, y: -10},
      },
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};

export const hexagonForTestingInfo: IChartProps = {
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
      info: {
        text: 'Sixth',
        offset: {x: -100, y: -10},
      },
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};
