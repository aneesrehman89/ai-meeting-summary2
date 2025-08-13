'use client';

import { Provider } from 'react-redux';
import { store as appStore } from './store';
import type { ReactNode } from 'react';
import type { configureStore } from '@reduxjs/toolkit';

type StoreType = ReturnType<typeof configureStore>;

export function Providers({
  children,
  storeOverride,
}: {
  children: ReactNode;
  storeOverride?: StoreType;
}) {
  return <Provider store={storeOverride ?? appStore}>{children}</Provider>;
}

export default Providers;
