import React from 'react';
import { blue, green } from '../style/colors';
import { IChartProps } from '../types';

export const triangle: IChartProps = {
  poles: [
    {
      score: 0.8,
      innerStroke: { opacity: 1, stroke: green, strokeWidth: 2 },
      stroke: { opacity: 1, stroke: blue },
    },
    {
      score: 0.6,
      innerStroke: { opacity: 1, stroke: green, strokeWidth: 2 },
      stroke: { opacity: 1, stroke: blue },
    },
    {
      score: 0.9,
      innerStroke: { opacity: 1, stroke: green, strokeWidth: 2 },
      stroke: { opacity: 1, stroke: blue },
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: { stroke: green, opacity: 1, strokeWidth: 1 },
  animation: { delay: 0, duration: 500 },
};

export const triangleForTestingInfo: IChartProps = {
  poles: [
    {
      score: 0.8,
      innerStroke: { opacity: 1, stroke: green, strokeWidth: 2 },
      stroke: { opacity: 1, stroke: blue },
      info: { text: 'First' },
    },
    {
      score: 0.6,
      innerStroke: { opacity: 1, stroke: green, strokeWidth: 2 },
      stroke: { opacity: 1, stroke: blue },
      info: { text: 'Second' },
    },
    {
      score: 0.9,
      innerStroke: { opacity: 1, stroke: green, strokeWidth: 2 },
      stroke: { opacity: 1, stroke: blue },
      info: { text: 'Third' },
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: { stroke: green, opacity: 1, strokeWidth: 1 },
  animation: { delay: 0, duration: 500 },
};
