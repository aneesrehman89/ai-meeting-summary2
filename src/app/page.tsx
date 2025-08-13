'use client';

import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment, incrementByAmount } from '../redux/features/counterSlice';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Home() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-12 p-24">
      <div className="mb-12 text-center" data-testid="counter-value">
        Count is {counter}
      </div>

      <div className="flex space-x-2">
        <button
          data-testid="increment-button"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-all hover:bg-blue-700"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          data-testid="decrement-button"
          className="rounded bg-green-500 px-4 py-2 font-bold text-white transition-all hover:bg-green-700"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <Button
          data-testid="increment-by-10-button"
          className="mx-2 h-[40px] rounded px-4 py-2 font-bold"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By 10
        </Button>
      </div>

      <div className="mt-12 flex space-x-6">
        <Link
          href="/"
          className="group flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transition-all duration-300 hover:scale-110 hover:from-pink-500 hover:to-purple-500"
        >
          <ArrowLeft
            size={28}
            className="text-white transition-transform duration-300 group-hover:-translate-x-1"
          />
        </Link>

        <Link
          href="/product"
          className="group flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-110 hover:from-cyan-500 hover:to-blue-500"
        >
          <ArrowRight
            size={28}
            className="text-white transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </main>
  );
}
