import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Slidebar from './components/Slidebar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Slidebar/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
