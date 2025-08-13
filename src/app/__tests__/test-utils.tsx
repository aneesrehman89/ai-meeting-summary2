import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../redux/features/counterSlice';

export function renderWithFreshStore(ui: React.ReactNode) {
  const store = configureStore({ reducer: { counter: counterReducer } });
  return render(<Provider store={store}>{ui}</Provider>);
}
