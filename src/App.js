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
import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app__root">
      {/* <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/topicDetails" component={TopicDetails}/>
        <Route path="/questions" component={Questions}/>
        <Route path="/quizResult" component={QuizResult}/>
        <Route path="/quiz" component={Quiz}/>
        <Route path="/" component={Home}/>
      <QuizResult />
      </Switch> */}
      {/* <Navbar /> */}
      {/* <Home/> */}
      {/* <Questions /> */}
      {/* <Quiz /> */}
      {/* <QuizQuestion /> */}
      {/* <Quiz /> */}
      {/* <Footer /> */}
      <AboutUs />
    </div>
    </Router>
  );
}

export default App;
