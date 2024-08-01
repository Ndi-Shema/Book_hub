import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks();
      setBooks(books);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default BookList;
