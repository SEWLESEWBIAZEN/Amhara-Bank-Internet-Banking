import './App.css';
import Index from './homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './homePage/services';
import Contact from './Contact'
import Alert from './Alert'
import NavBar from './homePage/NavBar';
import Footer from './homePage/Footer';



function App()
{


  return (

    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
          <Route path='/new-user' element={<Alert />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>







  );
}

export default App;
