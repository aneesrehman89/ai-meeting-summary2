'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeFromCart, clearCart } from '@/redux/features/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const { items, totalAmount } = useAppSelector((state) => state.cart);

  return (
    <div className="sticky top-8 w-80 rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">🛒 Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4">
            <p className="font-bold">Total: ${totalAmount.toFixed(2)}</p>
            <button
              className="mt-2 w-full rounded bg-red-500 py-2 text-white transition-all hover:bg-red-600"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
