
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Create from './components/Create';
import NotFound404 from './components/NotFound404';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';

function App() {

  return (
<>
<Router>
<Navbar/>


    <Routes>
    <Route exact path='/' element={<><Carousel /><Home /></>}>
      </Route> 
      <Route exact path='/create' element={<Create />}>
      </Route>
      <Route exact path='/blogs/:id' element={<BlogDetails />}>
        
      </Route>

      <Route path='*' element={<NotFound404/>}></Route>
    </Routes>
    <Footer />
</Router>
    

  
    
    </>
  );
}

export default App;
