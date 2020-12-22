import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import SectionCard from './Components/SectionCard';
import TopicDetails from './Pages/TopicDetails';

function App() {
  return (
    <div className="app__root">
      <Navbar />
      <Banner />
      <SectionCard /> 
      {/* <TopicDetails /> */}
    </div>
  );
}

export default App;
