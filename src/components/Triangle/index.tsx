import React from 'react';
import { IChartProps } from '../../types';
import Polygon from '../Polygon';

export default function Triangle(props: IChartProps) {
  return <Polygon {...props} type="triangle" />;
}
