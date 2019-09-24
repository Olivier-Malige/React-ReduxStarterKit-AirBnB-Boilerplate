import { createSlice } from 'redux-starter-kit';

const templateSlice = createSlice({
  slice: 'template',
  initialState: {
    book: null,
    currentPage: 'intro',
  },
  reducers: {
    setBook(state, action) {
      state.book = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setBook, setCurrentPage } = templateSlice.actions;

export default templateSlice.reducer;
