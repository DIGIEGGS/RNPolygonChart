import React from 'react';
import { IChartProps } from '../../types';
import { PolygonLayer } from '../Polygon/layer';

export const Tetragon = (props: IChartProps) => {
  return <PolygonLayer {...props} type="tetragon" />;
};
