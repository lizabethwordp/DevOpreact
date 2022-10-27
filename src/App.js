import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import CreateAcc from './components/pages/CreateAcc';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' //routing the pages
import PagenotFound from './components/pages/PagenotFound';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/home' element = {<Homepage />} />
          <Route exact path='/about' element = {<Aboutus />} />
          <Route exact path='/contact' element = {<CreateAcc />} />
          <Route path='*' element = {<PagenotFound/>} />
          
      
        </Routes>
      
      
      </div>
    </Router>
  );
}

export default App;

