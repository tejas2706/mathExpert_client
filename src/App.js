import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Footer from './Components/Footer'
import Hexagon from './Components/Hexagon';
import TopicDetails from './Pages/TopicDetails';
import Content from './Pages/Content';

function App() {
  return (
    <div className="app__root">
      <Navbar />
      {/* <Home /> */}
      {/* <Questions /> */}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
