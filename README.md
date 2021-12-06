# React Native Polygon Chart

Customizable and animatable polygon chart.

## Getting started

#### Installation

## For Managed Workflow users using Expo

This component is not supported in the managed workflow for expo for the time being.

```
npm install react-native-svg react-native-polygon-chart
```

or

```
yarn add react-native-svg react-native-polygon-chart
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

```
    <Triangle poles={[{score: 1}, {score: 0.5}, {score: 1}]} style={styles.triangle} />
```

You can use more poles for other polygons or they will render as if remaining scores are zero.

![polygon initial](https://user-images.githubusercontent.com/89466000/144827429-21307cf6-bc36-457b-ad71-227fa6e21fc1.gif)

## Props

- [`animation`](#animation)
- [`innerColor`](#innerColor)
- [`innerOpacity`](#innerOpacity)
- [`outerStroke`](#outerStroke)
- [`poles`](#poles)
- [`style`](#style)
- [`type`](#type)

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

### `type`

| Type                          | Required | Description          |
| ----------------------------- | -------- | -------------------- |
| [`PolygonType`](#PolygonType) | yes      | Type of the polygon. |

## Essential types and interfaces

### `ILineProps`

| Props         | Type     | Required |
| ------------- | -------- | -------- |
| `stroke`      | `string` | no       |
| `strokeWidth` | `number` | no       |
| `opacity `    | `string` | no       |

- The `stroke` prop is being used for line color.

---

### `IPole`

| Props         | Type         | Required |
| ------------- | ------------ | -------- |
| `score`       | `number`     | yes      |
| `text`        | `string`     | no       |
| `stroke`      | `ILineProps` | no       |
| `innerStroke` | `ILineProps` | no       |

- The `point` prop is a multiplier between 0 and 1 determines the vertex distance from the center of the polygon.

---

### `IAnimationParams`

| Props      | Type             | Required |
| ---------- | ---------------- | -------- |
| `delay`    | `number`         | no       |
| `duration` | `number`         | no       |
| `easing`   | `EasingFunction` | no       |

---

### `PolygonType`

| `triangle` | `tetragon` | `pentagon` | `hexagon` |
| ---------- | ---------- | ---------- | --------- |
