import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListCart from './index.tsx';

describe('when press the list cart should be go to the cart detail page', () => {
    const handlePress = jest.fn();
    test('should call goToTheDetail page when the cart is pressed', () => {

        const {getByText} = render(<ListCart name={'Jon'} navigateToDetails={handlePress} />);

        const Cart = getByText('Jon');
        fireEvent.press(Cart);

        expect(handlePress).toHaveBeenCalled();
    });

    test('when we gives name Jon the Cart name should be Jon', () => {
        const {getByText} = render(<ListCart name={'Jon'} navigateToDetails={handlePress} />);

        const Cart = getByText('Jon');

        expect(Cart.props.children).toBe('Jon');
    });
});
