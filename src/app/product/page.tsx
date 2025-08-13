'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/redux/features/productsSlice';
import { addToCart } from '@/redux/features/cartSlice';
import { useRouter } from 'next/navigation';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ArrowLeft } from 'lucide-react';

import { motion } from 'framer-motion';
import Cart from './cart';

export default function ProductHome() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { products, loading, error, currentPage, totalPages } = useAppSelector(
    (state) => state.products
  );

  const { items } = useAppSelector((state) => state.cart);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchProducts(1));
  }, [dispatch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePrev = () => {
    if (currentPage > 1 && !loading) {
      dispatch(fetchProducts(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !loading) {
      dispatch(fetchProducts(currentPage + 1));
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="flex items-center justify-between">
        {/* Back Icon */}
        <button
          onClick={() => router.push('/')}
          className="group flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-110 hover:from-cyan-500 hover:to-blue-500"
        >
          <ArrowLeft
            size={28}
            className="text-white transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {/* Animated Cart Icon */}
        <div className="relative" ref={cartRef}>
          <motion.button
            onClick={() => setCartOpen((prev) => !prev)}
            className="relative rounded-full p-2 transition hover:bg-gray-200"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1 text-xs text-white">
                {items.length}
              </span>
            )}
          </motion.button>

          {/* Dropdown Cart */}
          {cartOpen && (
            <div className="absolute right-0 z-50 mt-2 w-96 rounded-lg border bg-white shadow-lg">
              <Cart />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-start p-12 pt-2 pb-6">
        <h1 className="mb-2 text-3xl font-bold">Product Listing</h1>

        {error && (
          <p className="mb-4 font-semibold text-red-600" data-testid="error-message">
            Error: {error}
          </p>
        )}

        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded border p-4 shadow transition-shadow hover:shadow-lg"
              data-testid="product-item"
            >
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto mb-4 h-32 object-contain"
              />
              <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
              <p className="mb-2 text-sm text-gray-600">
                {product.description.substring(0, 80)}...
              </p>
              <div className="flex justify-between">
                <p className="font-bold">${product.price.toFixed(2)}</p>
                <button
                  className="rounded bg-blue-500 px-4 text-white transition-all hover:bg-blue-600"
                  onClick={() =>
                    dispatch(
                      addToCart({ id: product.id, title: product.title, price: product.price })
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-2 flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={loading || currentPage === 1}
          className={`rounded px-4 py-2 font-semibold ${
            loading || currentPage === 1
              ? 'cursor-not-allowed bg-gray-300'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          data-testid="prev-page-button"
        >
          Prev
        </button>
        <span className="flex items-center font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={loading || currentPage === totalPages}
          className={`rounded px-4 py-2 font-semibold ${
            loading || currentPage === totalPages
              ? 'cursor-not-allowed bg-gray-300'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          data-testid="next-page-button"
        >
          Next
        </button>
      </div>
    </main>
  );
}
