import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../services/api';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      setBook(book);
    };

    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetail;
