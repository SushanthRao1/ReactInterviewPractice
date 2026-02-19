import {render, screen, fireEvent} from '@testing-library/react';
import ButtonTest from './ButtonTest.jsx';

test('OnMount event trigger', () => {
    render(<ButtonTest />)

    const getElement = screen.getByTestId('count-value');
    const getInput = screen.getByPlaceholderText('Enter Count');
    fireEvent.change(getInput, {target: {value: 'SUshanth'}});

    expect(getElement).toHaveTextContent('Count: 0');
    expect(getInput).toHaveValue('SUshanth');
})
