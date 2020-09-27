import React from 'react';
import Header from './components/header/header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './components/pages/mainPage/mainPage';
import LoginPage from './components/pages/loginPage/loginPage';
import ActorPage from './components/pages/actorPage/actorPage';
import Footer from './components/footer/footer';
import DetailMovieContainer from './components/detailMovie/detailMovieContainer';
import './app.css';

function App() {

  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path={`/actor/:id`} exact component={ActorPage}/>
            <Route path={`/movie/:id/actors`}  exact component={DetailMovieContainer}/>
            <Route path={'/login'} exact component={LoginPage}/>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
