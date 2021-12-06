import { Animated, EasingFunction, EasingStatic, ViewStyle } from 'react-native';

export interface ICoordinate {
  x: number;
  y: number;
}

export interface ILineProps {
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
}

export interface IPole {
  score: number;
  text?: string;
  stroke?: ILineProps;
  innerStroke?: ILineProps;
}

export interface IChartProps {
  poles: Array<IPole>;
  innerColor?: string;
  innerOpacity?: number;
  outerStroke?: ILineProps;
  style?: ViewStyle;
  type?: PolygonType;
  animation?: IAnimationParams;
}

export interface IAnimationParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
}

export interface IAnimationProps extends IAnimationParams {
  value: Animated.Value;
}

export interface IFinalPoleResult extends IPole {
  end?: ICoordinate;
}

export interface IPolygonProps extends IChartProps {
  onLayout: (length: number) => () => void;
  guidePoles: Array<IFinalPoleResult>;
  scorePoles: Array<IFinalPoleResult>;
}

export type PolygonType = 'triangle' | 'tetragon' | 'pentagon' | 'hexagon';

export interface ICoordinatePoleArgs {
  array: Array<IPole>;
  length: number;
}

export interface ICoordinateScoreArgs extends ICoordinatePoleArgs {
  multiplier: number;
}

export type PoleType = 'guide' | 'score';

export interface IButtonProps {
  onClick: () => void;
  type: PolygonType;
}
