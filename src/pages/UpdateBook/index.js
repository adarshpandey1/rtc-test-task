import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { StyledBox } from '../AddBook/Styled';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateBook = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    book_name: state.item.bookData.book_name,
    author_name: state.item.bookData.author_name,
    cover_image: state.item.bookData.cover_image,
    description: state.item.bookData.description
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      book_id: state.item.bookData.book_id,
      book_name: formData.book_name,
      author_name: formData.author_name,
      cover_image: formData.cover_image,
      description: formData.description
    };
    await axios
      .patch(`http://localhost:8000/addBook/${state.item.id}`, { bookData })
      .then((res) => {
        console.log(res);
        if (res) {
          navigate('/view-books');
        }
      });
  };

  return (
    <Layout>
      <StyledBox>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Add your book
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book Id"
            name="book_id"
            variant="outlined"
            value={state.item.bookData.book_id}
            disabled
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book Name"
            name="book_name"
            variant="outlined"
            value={formData.book_name}
            onChange={handleChange}
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Author Name"
            name="author_name"
            variant="outlined"
            value={formData.author_name}
            onChange={handleChange}
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book cover Image"
            name="cover_image"
            variant="outlined"
            value={formData.cover_image}
            onChange={handleChange}
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book Description"
            name="description"
            variant="outlined"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <Button sx={{ mt: 3 }} variant="contained" color="primary" type="submit">
            save
          </Button>
        </form>
      </StyledBox>
    </Layout>
  );
};

export default UpdateBook;
