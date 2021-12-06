import React from 'react';
import { IChartProps } from '../../types';
import { PolygonLayer } from '../Polygon/layer';

export default function Hexagon(props: IChartProps) {
  return <PolygonLayer {...props} type="hexagon" />;
}
