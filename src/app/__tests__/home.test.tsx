import '@testing-library/jest-dom';
import Home from '../page';
import { renderWithFreshStore } from './test-utils';
import { screen, fireEvent } from '@testing-library/react';

beforeEach(() => {
  renderWithFreshStore(<Home />);
});

describe('Home Page Counter', () => {
  it('renders initial counter value', () => {
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Count is 0');
  });

  it('increments the counter by 1 when "Increment" is clicked', () => {
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Count is 1');
  });

  it('decrements the counter by 1 from 0 to -1', () => {
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Count is -1');
  });

  it('increments the counter by 10 when "Increment By 10" is clicked', () => {
    fireEvent.click(screen.getByTestId('increment-by-10-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Count is 10');
  });
});
