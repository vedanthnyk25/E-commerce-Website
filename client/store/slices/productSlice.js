import { createSlice } from '@reduxjs/toolkit';
import { products as allProducts } from '../../src/assets/frontend_assets/assets';

const initialState = {
  currency: '$',
  delivery_fee: 10,
  products: allProducts, // Original unfiltered products
  filteredProducts: allProducts, // Products after applying filters and sorting
  filters: {
    category: [],
    subCategory: [],
  },
  sort: 'relevant', // Default sorting
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      const { value, checked } = action.payload;
      if (checked) {
        state.filters.category.push(value);
      } else {
        state.filters.category = state.filters.category.filter((category) => category !== value);
      }
      productSlice.caseReducers.applyFilters(state);
    },
    setSubCategoryFilter: (state, action) => {
      const { value, checked } = action.payload;
      if (checked) {
        state.filters.subCategory.push(value);
      } else {
        state.filters.subCategory = state.filters.subCategory.filter((subCategory) => subCategory !== value);
      }
      productSlice.caseReducers.applyFilters(state);
    },
    setSort: (state, action) => {
      state.sort = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    applyFilters: (state) => {
      let filtered = [...allProducts];
      const { category, subCategory } = state.filters;

      if (category.length > 0) {
        filtered = filtered.filter((product) => category.includes(product.category));
      }

      if (subCategory.length > 0) {
        filtered = filtered.filter((product) => subCategory.includes(product.subCategory));
      }

      if (state.sort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (state.sort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = filtered;
    },
  },
});

export const { setCategoryFilter, setSubCategoryFilter, setSort } = productSlice.actions;
export default productSlice.reducer;