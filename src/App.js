import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/header/header';
import MainPage from './pages/mainPage/mainPage';
import LoginPage from './pages/loginPage/loginPage';
import ActorPage from './pages/actorPage/actorPage';
import Footer from './components/footer/footer';
import DetailMovieContainer from './pages/detailMovie/detailMovieContainer';

import './app.css';

function App() {

  return (
    <div className="App bg-gray-300">
        <Router>
          <div className='app'>
            <Header/>
            <Switch>
              <Route path='/' exact component={MainPage}/>
              <Route path={`/actor/:id`} exact component={ActorPage}/>
              <Route path={`/movie/:id/actors`}  exact component={DetailMovieContainer}/>
              <Route path={'/login'} exact component={LoginPage}/>
            </Switch>
          </div>
          <Footer/>
        </Router>
    </div>
  );
  
}

export default App;
