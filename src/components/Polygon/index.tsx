import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Svg, { Polygon as SVGPolygon } from 'react-native-svg';
import {
    generateInfo, generateLines, generatePolygonPoints, useLayout
} from '../../functions/utility';
import { black } from '../../style/colors';
import { ICoordinate, IPolygonProps } from '../../types';
import useStyles from './styles';

export default function Polygon({
  innerColor,
  innerOpacity,
  outerStroke,
  style,
  onLayout,
  guidePoles,
  scorePoles,
}: IPolygonProps) {
  const length = useRef<number>(0);
  const offset = useRef<ICoordinate>({x: 0, y: 0});
  const styles = useStyles(length.current);
  const useForceUpdate = () => {
    const [, setState] = useState<{}>();
    return () => setState({});
  };
  const forceUpdate = useForceUpdate();

  useEffect(() => onLayout(length.current), [length.current]);

  useEffect(() => forceUpdate(), [scorePoles]);

  return (
    <View
      style={[styles.container, style]}
      onLayout={event =>
        useLayout(event, (value, offsetResult) => {
          length.current = value;
          offset.current = offsetResult;
          forceUpdate();
        })
      }>
      {length.current > 0 && (
        <Svg viewBox={`0 0 ${length.current * 2} ${length.current * 2}`}>
          {generateLines(guidePoles, length.current, 'guide')}
          {generateLines(scorePoles, length.current, 'score')}
          <SVGPolygon
            points={generatePolygonPoints(scorePoles)}
            fill={innerColor ?? black}
            fillOpacity={innerOpacity ?? 1}
            {...outerStroke}
          />
        </Svg>
      )}
      {generateInfo(guidePoles, offset.current)}
    </View>
  );
}
