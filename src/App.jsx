import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (

      <div className="w-full overflow-hidden">
        <ToastContainer/>
        <Header />
        <About/>
        <Projects/>
        <Reviews />
        <Contact/>
        <Footer/>
      </div>
    
  );
};

export default App;


