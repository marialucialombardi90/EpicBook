import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AllTheBooks from './component/AllTheBooks';
import Welcome from './component/Welcome';
import ModalMessage from './component/ModalMessage';
import BookDetails from './pages/BookDetails'
import NotFound from './pages/NotFound';
import { books } from "./data/books";
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { ModalContextProvider } from './context/ModalContextProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [filterBook, setFilterBook] = useState(books);
  const filter = (searchValue) => {
    setSearch(searchValue.target.value);
    const filtered = books.filter((element) => {
      return search.toLocaleLowerCase() === ""
        ? element
        : element.title
            .toLocaleLowerCase()
            .includes(searchValue.target.value.toLocaleLowerCase());
    });
    setFilterBook(filtered);
  };

  return (
    <BrowserRouter>
    <ModalContextProvider>
    <ThemeContextProvider>
      <div className='position-relative'>
      <MyNav filter ={filter} />
      <Welcome/>
      <Routes>
        <Route path='/' element={<AllTheBooks filterBook={filterBook} />}/>    
        <Route path='/page-not-found' element={<NotFound />}/>    
        <Route path='/book-details/:asin' element={<BookDetails />}/>    
        <Route path='/*' element={<Navigate to='/page-not-found'/>}/>    
      </Routes>
      <MyFooter/>
      <ModalMessage />
      </div>
    </ThemeContextProvider>
    </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;
