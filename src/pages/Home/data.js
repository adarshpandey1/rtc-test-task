import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export const data = [
  {
    id: 1,
    title: 'Add book',
    description: 'Add your book page and information',
    icon: <AddToPhotosIcon />,
    route: '/add-book'
  },
  {
    id: 2,
    title: 'View  book',
    description: 'View your book page and information',
    icon: <RemoveRedEyeIcon />,
    route: '/view-books'
  },
  {
    id: 3,
    title: 'Search book',
    description: 'Search your book page and information',
    icon: <ManageSearchIcon />,
    route: '/search-book'
  }
];
