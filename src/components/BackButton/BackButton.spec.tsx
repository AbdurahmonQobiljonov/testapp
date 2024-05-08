import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BackButton from './index.tsx';

describe('when press the button should be go back', () => {
  test('should call goBackMock when the button is pressed', () => {
    const goBackMock = jest.fn();

    const {getByText} = render(<BackButton onPress={goBackMock} />);

    const backButton = getByText('Back');
    fireEvent.press(backButton);

    expect(goBackMock).toHaveBeenCalled();
  });

  test('if gives title the children text should be like title', () => {
    const goBackMock = jest.fn();

    const {getByText} = render(<BackButton onPress={goBackMock} title={'BackButtonText'} />);

    const backButton = getByText('BackButtonText');

    console.log(backButton.props.children)

    expect(backButton.props.children).toBe('BackButtonText');
  });
});
