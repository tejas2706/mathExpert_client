import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Footer from './Components/Footer';
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
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChooseContent from './Pages/ChooseContent';
import LearningTrack from './Pages/LearningTrack';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app__root">
          {/* <Navbar /> */}
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route
              path="/:standard/:topicName/:topicId"
              exact
              component={TopicDetails}
            />
            {/* <Route path="/topicDetails" exact component={TopicDetails}/> */}
            <Route path="/asd" exact component={Home} />
            <Route
              path="/:standard/:topicName/:subTopicName/:questionId"
              component={Questions}
            />
            <Route path="/quizResult" component={QuizResult} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/chooseContent" component={ChooseContent} />
            <Route path="/LearningTrack" component={LearningTrack} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/" component={Content} />
            <Route path="/quizResult" component={QuizResult} />
            <Route path="/faq" component={FAQ} />
            <Route path="/login" exact component={Login} />
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
    </Provider>
  );
}

export default App;
