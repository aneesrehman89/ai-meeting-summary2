import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

const PAGE_SIZE = 6; // number of products per page

// thunk function
export const fetchProducts = createAsyncThunk<
  { products: Product[]; totalPages: number; currentPage: number },
  number
>('products/fetchProducts', async (page: number) => {
  // action type prefix
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  const allProducts: Product[] = await response.json();

  const totalPages = Math.ceil(allProducts.length / PAGE_SIZE);

  // Calculate products for requested page
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const products = allProducts.slice(start, end);

  return { products, totalPages, currentPage: page };
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default productsSlice.reducer;
