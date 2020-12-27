import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app__root">
      <Navbar />
      {/* <Home /> */}
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
