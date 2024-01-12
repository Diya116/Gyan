// __tests__/Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Press me" />);
    const buttonElement = getByText('Press me');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Press me" onPress={onPressMock} />);
    const buttonElement = getByText('Press me');

    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
