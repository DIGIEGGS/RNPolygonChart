import React from 'react';
import { IChartProps } from '../../types';
import Polygon from '../Polygon';

export default function Tetragon(props: IChartProps) {
  return <Polygon {...props} type="tetragon" />;
}
