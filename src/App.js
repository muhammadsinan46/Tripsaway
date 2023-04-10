
import Activities from "./components/Activities";
import Bookings from "./components/Bookings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galleries from "./components/Galleries";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import TopBar from "./components/TopBar";


function App() {
  return (
  
     <>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Bookings/>
      <Galleries/>  
      <Contact/>
      <Footer/>
      
    </>
   
  );
}

export default App;
