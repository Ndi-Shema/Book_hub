import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

export const getBook = async (id: string) => {
  const response = await axios.get(`${API_URL}/books/${id}`);
  return response.data;
};
