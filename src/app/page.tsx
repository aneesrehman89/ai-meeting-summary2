'use client';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment, incrementByAmount } from '../redux/features/counterSlice';
import { Button } from '@/components/ui/button';

export default function Home() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-12">Count is {counter}</div>

      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <Button
          className="mx-2 rounded font-bold py-2 px-4 h-[40px]"
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          {' '}
          Incement By 10
        </Button>
      </div>
    </main>
  );
}
