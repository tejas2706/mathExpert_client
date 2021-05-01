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
import Profile from './Pages/Profile';
import FAQ from './Pages/FAQ';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app__root">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/profile" component={Profile}/>
        <Route path="/asd" exact component={Home}/>
        <Route path="/" component={TopicDetails}/>
        <Route path="/questions" component={Questions}/>
        <Route path="/quizResult" component={QuizResult}/>
        <Route path="/quiz" component={Quiz}/>
        <Route path="/aboutUs" component={AboutUs}/>
        <Route path="/content" component={Content}/>
        <Route path="/quizResult" component={QuizResult}/>
        <Route path="/faq" component={FAQ}/>
      </Switch>
      {/* <Footer /> */}
      {/* <QuizResult /> */}
      {/* <Home/> */}
      {/* <Questions /> */}
      {/* <Quiz /> */}
      {/* <QuizQuestion /> */}
      {/* <Quiz /> */}
      {/* <AboutUs /> */}
    </div>
    </Router>
  );
}

export default App;
