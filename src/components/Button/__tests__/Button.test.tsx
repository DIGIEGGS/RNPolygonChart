import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '../';
import { getButtonText } from '../../../functions/utility';
import { PolygonType } from '../../../types';

test('renders correctly', async () => {
  const buttonType: PolygonType = 'triangle';
  const text = getButtonText(buttonType);

  const { getByText } = render(<Button onPress={() => {}} type={buttonType} />);

  const button = getByText(text);

  expect(button).toBeTruthy();
});

test('onPress works correctly', async () => {
  const onPressFunction = jest.fn();
  const buttonType: PolygonType = 'triangle';

  const { getByText } = render(<Button onPress={onPressFunction} type={buttonType} />);

  const button = getByText(getButtonText(buttonType));

  fireEvent.press(button);

  expect(onPressFunction).toBeCalled();
});
