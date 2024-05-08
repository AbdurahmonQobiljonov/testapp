import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './index.tsx';

describe('when press the button should be go back', () => {
  test('should call goBackMock when the button is pressed', () => {
    const handlePress = jest.fn();

    const {getByText} = render(<Button onPress={handlePress} name="Button" />);

    const backButton = getByText('Button');
    fireEvent.press(backButton);

    expect(handlePress).toHaveBeenCalled();
  });

  test('when we gives fontSize n the button fontSize should be n', () => {
    const {getByText} = render(<Button fontSize={16} name="Button" />);

    const backButton = getByText('Button');

    expect(backButton.props.style.fontSize).toBe(16);
  });

  test('when we gives color red the button color should be red', () => {
    const {getByText} = render(<Button color={'red'} name="Button" />);

    const backButton = getByText('Button');

    expect(backButton.props.style.color).toBe('red');
  });
});
