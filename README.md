# React Native Polygon Chart

Check out the medium article about our package: https://medium.com/digieggs/visualizing-multiple-percentages-as-polygons-react-native-polygon-chart-939d360a5bd1

[![DIGIEGGS - RNPolygonChart](https://img.shields.io/static/v1?label=DIGIEGGS&message=RNPolygonChart&color=blue&logo=github)](https://github.com/DIGIEGGS/RNPolygonChart 'Go to GitHub repo')
[![stars - RNPolygonChart](https://img.shields.io/github/stars/DIGIEGGS/RNPolygonChart?style=social)](https://github.com/DIGIEGGS/RNPolygonChart)
[![forks - RNPolygonChart](https://img.shields.io/github/forks/DIGIEGGS/RNPolygonChart?style=social)](https://github.com/DIGIEGGS/RNPolygonChart)

[![Unit Tests](https://github.com/DIGIEGGS/RNPolygonChart/workflows/Unit%20Tests/badge.svg)](https://github.com/DIGIEGGS/RNPolygonChart/actions?query=workflow:"Unit+Tests")
[![GitHub tag](https://img.shields.io/github/tag/DIGIEGGS/RNPolygonChart?include_prereleases=&sort=semver&color=blue)](https://github.com/DIGIEGGS/RNPolygonChart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - RNPolygonChart](https://img.shields.io/github/issues/DIGIEGGS/RNPolygonChart)](https://github.com/DIGIEGGS/RNPolygonChart/issues)

Customizable and animatable polygon chart.

## Getting started

## Installation

#### React Native CLI

```
npm install react-native-svg @digieggs/rn-polygon-chart
```

or

```
yarn add react-native-svg @digieggs/rn-polygon-chart
```

#### Expo CLI

```
expo install react-native-svg
expo install @digieggs/rn-polygon-chart
```

#### Additional steps

- iOS

In your project's ios directory

```
pod install
```

- Android

No additional steps needed

## Usage

#### Import

```javascript
import {
  Hexagon,
  Pentagon,
  Tetragon,
  Triangle,
} from 'react-native-polygon-chart';
```

#### Usage

```javascript
<Triangle
  poles= {[
    {
      score: 0.8,
      innerStroke: {opacity: 1, stroke: "#30d158", strokeWidth: 2},
      stroke: {opacity: 1, stroke: "#0a84ff"},
    },
    {
      score: 0.6,
      innerStroke: {opacity: 1, stroke: "#30d158", strokeWidth: 2},
      stroke: {opacity: 1, stroke: "#0a84ff"},
    },
    {
      score: 0.9,
      innerStroke: {opacity: 1, stroke: "#30d158", strokeWidth: 2},
      stroke: {opacity: 1, stroke: "#0a84ff"},
    },
  ]}
  innerColor="#30d158"
  innerOpacity={0.2}
  outerStroke={{stroke: green, opacity: 1, strokeWidth: 1}}
  animation={{delay: 0, duration: 500}}
  style={styles.triangle}
/>

...

const styles = StyleSheet.create({
  triangle: {width: 300, height: 600},
});

```

You can use more poles for other polygons or polygon will render as if remaining scores are zero.

![polygon2](https://user-images.githubusercontent.com/89466000/145551533-f31e488b-2143-44b2-a0ff-5bb9915d9b41.gif)

## Props

- [`animation`](#animation)
- [`innerColor`](#innerColor)
- [`innerOpacity`](#innerOpacity)
- [`outerStroke`](#outerStroke)
- [`poles`](#poles)
- [`style`](#style)

### `animation`

| Type                                    | Required | Description                                                        |
| --------------------------------------- | -------- | ------------------------------------------------------------------ |
| [`IAnimationParams`](#IAnimationParams) | no       | Object that specifies the details of the polygon render animation. |

---

### `innerColor`

| Type     | Required | Description                |
| -------- | -------- | -------------------------- |
| `string` | no       | Fill color of the polygon. |

---

### `innerOpacity`

| Type     | Required | Description                  |
| -------- | -------- | ---------------------------- |
| `number` | no       | Fill opacity of the polygon. |

---

### `outerStroke`

| Type                        | Required | Description                            |
| --------------------------- | -------- | -------------------------------------- |
| [`ILineProps`](#ILineProps) | no       | Props for outer stroke of the polygon. |

---

### `poles`

| Type                     | Required | Description                              |
| ------------------------ | -------- | ---------------------------------------- |
| [`Array<IPole>`](#IPole) | yes      | An array of details to draw the polygon. |

---

### `style`

| Type        | Required | Description                       |
| ----------- | -------- | --------------------------------- |
| `ViewStyle` | no       | Style of the polygon's container. |

---

## Essential types and interfaces

### `ILineProps`

| Props         | Type     | Required |
| ------------- | -------- | -------- |
| `stroke`      | `string` | no       |
| `strokeWidth` | `number` | no       |
| `opacity `    | `number` | no       |

- The `stroke` prop is being used for line color.

---

### `IPole`

| Props         | Type              | Required |
| ------------- | ----------------- | -------- |
| `score`       | `number`          | yes      |
| `info`        | [`IInfo`](#IInfo) | no       |
| `stroke`      | `ILineProps`      | no       |
| `innerStroke` | `ILineProps`      | no       |

- The `point` prop is a multiplier between 0 and 1 determines the vertex distance from the center of the polygon.

---

### `IInfo`

| Props       | Type                  | Required |
| ----------- | --------------------- | -------- |
| `text`      | `string`              | no       |
| `textStyle` | `TextStyle`           | no       |
| `style`     | `ViewStyle`           | no       |
| `onPress`   | `() => void`          | no       |
| `offset`    | [`IOffset`](#IOffset) | no       |

- The `offset` prop determines the absolute x and y offsets of info element.

---

### `IOffset`

| Props | Type     | Required |
| ----- | -------- | -------- |
| `x`   | `number` | yes      |
| `y`   | `number` | yes      |

---

### `IAnimationParams`

| Props      | Type             | Required |
| ---------- | ---------------- | -------- |
| `delay`    | `number`         | no       |
| `duration` | `number`         | no       |
| `easing`   | `EasingFunction` | no       |
