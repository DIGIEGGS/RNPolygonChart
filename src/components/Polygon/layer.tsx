import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useAnimation } from '../../functions/animation';
import {
    coordinateGuidePoles as hexagonGuides, coordinateScorePoles as hexagonScores
} from '../../functions/hexagon';
import {
    coordinateGuidePoles as pentagonGuides, coordinateScorePoles as pentagonScores
} from '../../functions/pentagon';
import {
    coordinateGuidePoles as tetragonGuides, coordinateScorePoles as tetragonScores
} from '../../functions/tetragon';
import {
    coordinateGuidePoles as triangleGuides, coordinateScorePoles as triangleScores
} from '../../functions/triangle';
import { finalizePole } from '../../functions/utility';
import {
    IChartProps, ICoordinatePoleArgs, ICoordinateScoreArgs, IFinalPoleResult, IPolygonLayerProps
} from '../../types';
import Polygon from './';

export const PolygonLayer = ({
  poles: rawPoles,
  type,
  animation: animationParams,
  ...rest
}: IPolygonLayerProps) => {
  const [guidePoles, setGuidePoles] =
    useState<Array<IFinalPoleResult>>(rawPoles);
  const [scorePoles, setScorePoles] =
    useState<Array<IFinalPoleResult>>(rawPoles);
  const length = useRef<number>(0);
  const [animValue, setAnimValue] = useState<Animated.Value>(
    new Animated.Value(0),
  );
  const animation = useAnimation({value: animValue, ...animationParams});
  const rawPolesRef = useRef(rawPoles);

  const coordinateGuidePoles = (
    props: ICoordinatePoleArgs,
  ): Array<IFinalPoleResult> => {
    switch (type) {
      case 'triangle':
        return triangleGuides(props);
      case 'tetragon':
        return tetragonGuides(props);
      case 'pentagon':
        return pentagonGuides(props);
      case 'hexagon':
        return hexagonGuides(props);
      default:
        return triangleGuides(props);
    }
  };

  const coordinateScorePoles = (
    props: ICoordinateScoreArgs,
  ): Array<IFinalPoleResult> => {
    switch (type) {
      case 'triangle':
        return triangleScores(props);
      case 'tetragon':
        return tetragonScores(props);
      case 'pentagon':
        return pentagonScores(props);
      case 'hexagon':
        return hexagonScores(props);
      default:
        return triangleScores(props);
    }
  };

  const handleAnimatedValue: Animated.ValueListenerCallback = ({value}) => {
    if (length.current > 0) {
      console.log(length.current, value);
      setScorePoles(
        coordinateScorePoles({
          array: finalizePole(rawPolesRef.current),
          length: length.current,
          multiplier: value,
        }),
      );
    }
  };

  const setGuides = () =>
    setGuidePoles(
      coordinateGuidePoles({
        array: finalizePole(rawPolesRef.current),
        length: length.current,
      }),
    );

  const setNonAnimatedScores = () =>
    setScorePoles(
      coordinateScorePoles({
        array: finalizePole(rawPolesRef.current),
        length: length.current,
        multiplier: 1,
      }),
    );

  const startAnimation = () => {
    if (length.current > 0) {
      setGuidePoles(
        coordinateGuidePoles({
          array: finalizePole(rawPolesRef.current),
          length: length.current,
        }),
      );

      animValue.setValue(0);
      animation.start();
    }
  };

  const onLayout = (len: number) => {
    length.current = len;
    if (animationParams) {
      startAnimation();
    } else {
      setGuides();
      setNonAnimatedScores();
    }

    return () => animation && animation.stop();
  };

  useEffect(() => {
    animValue.addListener(handleAnimatedValue);
    return () => animValue.removeAllListeners();
  }, []);

  useEffect(() => {
    rawPolesRef.current = rawPoles;

    if (animationParams) {
      startAnimation();
    } else {
      setNonAnimatedScores();
    }
  }, [rawPoles]);

  return (
    <Polygon
      {...rest}
      guidePoles={length.current > 0 ? guidePoles : []}
      scorePoles={length.current > 0 ? scorePoles : []}
      onLayout={onLayout}
      poles={rawPolesRef.current}
      type="triangle"
    />
  );
};
