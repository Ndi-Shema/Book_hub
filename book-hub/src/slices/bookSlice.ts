import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  id: string;
  title: string;
  author: string;
}

interface BookState {
  books: Book[];
  selectedBook: Book | null;
}

const initialState: BookState = {
  books: [],
  selectedBook: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    selectBook(state, action: PayloadAction<Book>) {
      state.selectedBook = action.payload;
    },
    clearSelectedBook(state) {
      state.selectedBook = null;
    },
  },
});

export const { setBooks, selectBook, clearSelectedBook } = bookSlice.actions;
export default bookSlice.reducer;
