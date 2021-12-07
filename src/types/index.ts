import { Animated, EasingFunction, TextStyle, ViewStyle } from 'react-native';

export interface ICoordinate {
  x: number;
  y: number;
}

export interface ILineProps {
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
}

export interface IInfo {
  text?: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: () => void;
}

export interface IPole {
  score: number;
  stroke?: ILineProps;
  innerStroke?: ILineProps;
  info?: IInfo;
}

export interface IChartProps {
  animation?: IAnimationParams;
  innerColor?: string;
  innerOpacity?: number;
  outerStroke?: ILineProps;
  poles: Array<IPole>;
  style?: ViewStyle;
}

export interface IPolygonLayerProps extends IChartProps {
  type: PolygonType;
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

export interface IPolygonProps extends IPolygonLayerProps {
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

export interface IInfoStyleProps {
  size: number;
  infoCoordinates: ICoordinate;
  infoTextOffset: ICoordinate;
  infoTextSize: ICoordinate;
}
