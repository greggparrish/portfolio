import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Route
          path='/'
          component={Home}
        />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
