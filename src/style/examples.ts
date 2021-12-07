import { IPolygonLayerProps } from '../types';
import { blue, green } from './colors';

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
      score: 0.9,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
    {
      score: 1,
      innerStroke: {opacity: 1, stroke: green, strokeWidth: 2},
      stroke: {opacity: 1, stroke: blue},
    },
  ],
  innerColor: green,
  innerOpacity: 0.2,
  outerStroke: {stroke: green, opacity: 1, strokeWidth: 1},
  animation: {delay: 0, duration: 500},
};
