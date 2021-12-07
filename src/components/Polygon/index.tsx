import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    LayoutChangeEvent, LayoutRectangle, Text, TextStyle, TouchableOpacity, View
} from 'react-native';
import Svg, { Polygon as SVGPolygon } from 'react-native-svg';
import { generateLines, generatePolygonPoints, useLayout } from '../../functions/utility';
import { black } from '../../style/colors';
import { initialInfoStyleProps } from '../../style/examples';
import { ICoordinate, IFinalPoleResult, IInfoStyleProps, IPolygonProps } from '../../types';
import useStyles, { useInfoStyles } from './styles';

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
  const [infoStyleProps, setInfoStyleProps] = useState<Array<IInfoStyleProps>>(
    guidePoles.map(() => initialInfoStyleProps),
  );
  const [infoStyles, setInfoStyles] = useState<Array<TextStyle>>(
    guidePoles.map(() => ({})),
  );
  const useForceUpdate = () => {
    const [, setState] = useState<{}>();
    return () => setState({});
  };
  const forceUpdate = useForceUpdate();

  useEffect(() => onLayout(length.current), [length.current]);

  useEffect(() => forceUpdate(), [scorePoles]);

  useEffect(() => {
    if (infoStyleProps.length > 0) {
      const newStyles = infoStyleProps.map(v => {
        return useInfoStyles(v ?? initialInfoStyleProps).info;
      });

      setInfoStyles(newStyles);
    }
  }, [infoStyleProps]);

  const onInfoLayout = (
    measure: LayoutRectangle,
    poleResult: IFinalPoleResult,
    i: number,
  ) => {
    const coordinates: ICoordinate = {
      x: poleResult.end?.x ?? 0,
      y: poleResult.end?.y ?? 0,
    };

    let newProps = [...infoStyleProps];

    newProps[i] = {
      infoCoordinates: coordinates,
      infoTextOffset: offset.current,
      infoTextSize: {x: measure.width, y: measure.height},
      size: length.current,
    };

    setInfoStyleProps(newProps);
  };

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
      {length.current > 0 &&
        guidePoles.map((v, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={v.info?.onPress}
              style={{...v.info?.style, ...infoStyles[i]}}
              onLayout={({nativeEvent}) =>
                onInfoLayout(nativeEvent.layout, v, i)
              }>
              <Text style={v.info?.textStyle}>{v.info?.text}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}
