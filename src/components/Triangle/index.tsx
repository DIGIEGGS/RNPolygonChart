import React from 'react';
import { IChartProps } from '../../types';
import { PolygonLayer } from '../Polygon/layer';

export default function Triangle(props: IChartProps) {
  return <PolygonLayer {...props} type="triangle" />;
}
