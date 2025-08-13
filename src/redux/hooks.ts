import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';

<<<<<<< HEAD
=======
// Use throughout your app instead of plain `useDispatch` and `useSelector`
>>>>>>> fd172a4e4d7cd1eb8eb866f9ae5d1325208b9730
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
