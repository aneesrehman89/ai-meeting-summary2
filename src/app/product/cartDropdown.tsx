'use client';

import { useState, useRef, useEffect } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Cart from './cart';

export default function CartDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative rounded-full p-2 transition hover:bg-gray-200"
      >
        <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-96 rounded-lg border bg-white shadow-lg">
          <Cart />
        </div>
      )}
    </div>
  );
}
