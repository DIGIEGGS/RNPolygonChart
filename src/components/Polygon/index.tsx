import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import Svg, { Polygon as SVGPolygon } from 'react-native-svg';
import { useAnimation } from '../../functions/animation';
import {
    generateInfo, generateLines, generatePolygonPoints, useComponentSize, useCoordinateGuidePoles,
    useCoordinateScorePoles
} from '../../functions/utility';
import { black } from '../../style/colors';
import { IGenericChartProps } from '../../types';
import styles from './styles';

export default function Polygon({
  innerColor,
  innerOpacity,
  outerStroke,
  style,
  poles,
  animation: animationInput,
  type,
}: IGenericChartProps) {
  const { size, offset, onLayout } = useComponentSize();
  const [multiplier, setMultiplier] = useState<number>(0);
  const [animValue, setAnimValue] = useState<Animated.Value>(new Animated.Value(0));
  const animation = animationInput && useAnimation({ ...animationInput, value: animValue });

  useEffect(() => {
    if (size) {
      animValue.addListener(({ value }) => setMultiplier(value));
      animation?.start();
    }

    return () => {
      animValue.removeAllListeners();
      animation?.stop();
    };
  }, [size]);

  const coordinateScorePoles = useCoordinateScorePoles(
    {
      array: poles,
      length: size ?? 0,
      multiplier: animationInput ? multiplier : 1,
    },
    type,
  );

  const coordinateGuidePoles = useCoordinateGuidePoles({ array: poles, length: size ?? 0 }, type);

  const coordinateGuideInfos = useCoordinateGuidePoles(
    { array: poles, length: (size ?? 0) / 2 },
    type,
  );

  return (
    <View style={[styles.container, style]} onLayout={onLayout} testID="test-container">
      {size && size !== Infinity && (
        <Svg viewBox={`0 0 ${size * 2} ${size * 2}`}>
          {generateLines(coordinateGuidePoles, size, 'guide')}
          {generateLines(coordinateScorePoles, size, 'score')}
          <SVGPolygon
            points={generatePolygonPoints(coordinateScorePoles)}
            fill={innerColor ?? black}
            fillOpacity={innerOpacity ?? 1}
            {...outerStroke}
          />
        </Svg>
      )}
      {size && size !== Infinity && generateInfo(coordinateGuideInfos, offset ?? { x: 0, y: 0 })}
    </View>
  );
}
