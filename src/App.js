import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from "./pages/portfolio";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Journey from "./pages/journey";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <main>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About/>} />
              <Route path="/journey" element={<Journey/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route element={<Error/>} />
          </Routes>
          <Footer>
              
          </Footer>
      </main>
  )
}


// function App() {
//   return (
//       <main>
//   <Routes>
//     <Route path="/" element={<Home/>}>
//       <Route path="/portfolio" element={<Portfolio />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="*" element={<Error/>} />
//     </Route>
//   </Routes>
// </main>

//   );
// }


export default App;

