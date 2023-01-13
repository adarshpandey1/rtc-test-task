import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import ViewBook from '../pages/ViewBook';
import SearchBook from '../pages/SearchBook';
import UpdateBook from '../pages/UpdateBook';

const App = () => {
  return (
    <>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/view-books" element={<ViewBook />} />
          <Route path="/search-book" element={<SearchBook />} />
          <Route path="/book/:id" element={<UpdateBook />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;
