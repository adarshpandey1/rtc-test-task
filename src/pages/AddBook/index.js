import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { StyledBox } from './Styled';
import { TextField, Button, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    unique_id: uuid()
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
      book_id: formData?.unique_id,
      book_name: formData.book_name,
      author_name: formData.author_name,
      cover_image: formData.cover_image,
      description: formData.description
    };
    await axios.post(`http://localhost:8000/addBook/`, { bookData }).then((res) => {
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
            value={formData?.unique_id}
            disabled
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book Name"
            name="book_name"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Author Name"
            name="author_name"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book cover Image"
            name="cover_image"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
          <TextField
            style={{ width: '100%', margin: '5px' }}
            type="text"
            label="Book Description"
            name="description"
            variant="outlined"
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

export default AddBook;
