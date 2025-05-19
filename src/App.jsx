import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Services from './components/Services/services.jsx';
import Blog from './components/Blog/blog.jsx';
import Contact from './components/Contact Us/contact.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {

  return (
    <div className="App">
      {/*Components*/}
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
export default App;