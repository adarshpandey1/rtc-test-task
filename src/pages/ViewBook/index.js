import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { Grid } from '@mui/material';
import BookCard from '../../components/BookCard';

const ViewBook = () => {
  const [books, setBooks] = useState([]);
  console.log('books', books);
  useEffect(() => {
    viewAllBooks();
  }, []);

  const viewAllBooks = async () => {
    await axios.get(`http://localhost:8000/addBook/`).then((res) => {
      if (res) {
        setBooks(res.data);
      }
    });
  };

  return (
    <Layout>
      <Grid container sx={{ mt: 10 }}>
        {books?.length > 0 &&
          books?.map((item, index) => {
            return (
              <Grid key={index} item sm={12} md={4} style={{ padding: '5px' }}>
                <BookCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </Layout>
  );
};

export default ViewBook;
