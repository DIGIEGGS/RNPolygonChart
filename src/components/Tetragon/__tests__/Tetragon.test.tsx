import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import Tetragon from '../';
import { tetragon, tetragonForTestingInfo } from '../../../mocks/tetragon';
import { IChartProps } from '../../../types';

test('renders correctly', async () => {
  const rendered = render(
    <Tetragon
      {...tetragon}
      style={{ width: 300, height: 300 }}
    />,
  );

  expect(rendered).toBeTruthy();
});

test('texts render and press correctly', async () => {
  const functions = [...new Array(4)].map(() => jest.fn());

  const data: IChartProps = {
    ...tetragonForTestingInfo,
    poles: tetragonForTestingInfo.poles.map((v, i) => ({
      ...v,
      info: { ...v.info, onPress: functions[i] },
    })),
  };

  jest.useFakeTimers();
  const { getByTestId, getByText } = render(
    <Tetragon
      {...data}
      animation={undefined}
      style={{ width: 300, height: 300 }}
    />,
  );

  const view = getByTestId('test-container');

  await act(async () => {
    fireEvent(view, 'layout', {
      nativeEvent: {
        layout: {
          width: 300,
          height: 300,
        },
      },
    });

    await waitFor(
      () => {
        data.poles.forEach((pole, i) => {
          const text = getByText(
            pole.info?.text?.toString() ?? '',
          );

          expect(text).toBeTruthy();

          fireEvent.press(text);

          expect(functions[i]).toHaveBeenCalled();
        });
      },
      { interval: 1000, timeout: 4000 },
    );
  });
});
