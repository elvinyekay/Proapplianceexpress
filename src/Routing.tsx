import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './components/layouts/Main/Main';
import Home from './pages/UI/Home/Home';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />}>
          <Route index element={<Home />} />
          <Route path={'contact'} element={<h1>Contact</h1>} />
          <Route path={'about'} element={<h1>About</h1>} />
          <Route path={'products'} element={<h1>Blog</h1>} />
          <Route path={'products'} element={<h1>Brands</h1>} />
          <Route path={'products'} element={<h1>Contact</h1>} />
          <Route path={'products'} element={<h1>Privacy and Policy</h1>} />
          <Route path={'products'} element={<h1>Services</h1>} />
          <Route path={'products'} element={<h1>Revievs</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
