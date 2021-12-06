import React from 'react';
import { IChartProps } from '../../types';
import { PolygonLayer } from '../Polygon/layer';

export const Triangle = (props: IChartProps) => {
  return <PolygonLayer {...props} type="triangle" />;
};
