import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Footer from './Components/Footer'
import Hexagon from './Components/Hexagon';
import TopicDetails from './Pages/TopicDetails';
import Content from './Pages/Content';
import QuestionsCard from './Components/QuestionsCard';
import QuizQuestion from './Components/QuizQuestion';
import Quiz from './Pages/Quiz';
import QuizResult from './Pages/QuizResult';

function App() {
  return (
    <div className="app__root">
      {/* <Navbar /> */}
      {/* <TopicDetails /> */}
      {/* <Home/> */}
      {/* <Questions /> */}
      {/* <Quiz /> */}
      {/* <QuizQuestion /> */}
      {/* <Quiz /> */}
      <QuizResult />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
