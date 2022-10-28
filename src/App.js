import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import CareerPage from './pages/CareerPage'
import ServicesPage from './pages/ServicesPage'
import Header from './components/LayoutComponents/Header/Header';
import Footer from './components/LayoutComponents/Footer/Footer';
import Coorperative from './pages/Coorperative';

function App() {
  return (
    <Fragment>
      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/coorperative" element={<Coorperative/>} />

      </Routes>
      
      <Footer />

    </Fragment>

  );
}

export default App;
