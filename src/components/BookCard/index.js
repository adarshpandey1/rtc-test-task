import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import EditModal from '../../components/ViewBookModal';

export default function ImgMediaCard({ item }) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  console.log('openModal', openModal);
  const handleRoute = (item) => {
    navigate(`/book/${item.bookData.book_id}`, { state: { item } });
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 445 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item?.bookData?.cover_image}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="div">
              {item?.bookData?.book_name}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {item?.bookData?.author_name}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {item?.bookData?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleRoute(item)}>
            Edit
          </Button>
          <Button size="small" onClick={handleClick}>
            Quick View
          </Button>
        </CardActions>
      </Card>
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md">
        <EditModal item={item} />
      </Dialog>
    </>
  );
}
