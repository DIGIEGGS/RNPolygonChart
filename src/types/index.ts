import { Animated, EasingFunction, LayoutChangeEvent, TextStyle, ViewStyle } from 'react-native';

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
  offset?: IOffset;
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

export interface IGenericChartProps extends IChartProps {
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

export type PolygonType =
  | 'triangle'
  | 'tetragon'
  | 'pentagon'
  | 'hexagon';

export interface ICoordinatePoleArgs {
  array: Array<IPole>;
  length: number;
}

export interface ICoordinateScoreArgs
  extends ICoordinatePoleArgs {
  multiplier: number;
}

export type PoleType = 'guide' | 'score';

export interface IButtonProps {
  onPress: () => void;
  type: PolygonType;
}

export interface IOffset extends ICoordinate {}

export interface IInfoLayout extends IFinalPoleResult {
  offset?: IOffset;
}

export interface IUseComponentSizeResult {
  size?: number;
  offset?: IOffset;
  onLayout: (event: LayoutChangeEvent) => void;
}

export interface IInfoLayerProps {
  info: Array<IFinalPoleResult>;
  overallOffset: IOffset;
}
