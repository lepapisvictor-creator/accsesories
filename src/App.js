
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup.jsx';
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import Signin from './components/Signin.jsx';
import Addproduct from './components/Addproduct.jsx';
import Getproduct from './components/Getproduct.jsx';
import Makepayment from './components/Makepayment.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import CarChatbot from './components/chartbot.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App full-height ">
        <Navbar />
        <header className="App-header">
          <h1 className='text-danger justify-content-center'> <img src="" alt="" width={100} />Welcome to Velocity Motors🤝 </h1>



        </header>
        {/* nav links  */}

        {/* routes  */}
        <Routes>
          <Route path='/' element={<Getproduct />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/addproduct' element={<Addproduct />}></Route>
          <Route path='/makepayment' element={<Makepayment />}></Route>



        </Routes>
        <CarChatbot/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
