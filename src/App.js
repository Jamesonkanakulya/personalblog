import React from 'react';

import './App.css';

import { Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import ErrorPage from './Pages/ErrorPage';
import Footer from './components/Footer';
import SingleProject from './Pages/SingleProject';
import SingleblogPage from './Pages/SingleblogPage';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        
        <Route exact path ='/about' component={About}/>
        <Route exact path ='/blog' component = {Blog}/>
        <Route exact path ='/blog/:slug' component = {SingleblogPage}/>
        <Route exact path='/' component={Home}/>
        <Route exact path ='/projects' component = {Projects}/>
        <Route exact path ='/contact' component = {Contact}/>
        <Route exact path ='/projects/:slug/' component = {SingleProject}/>
        <Route component = {ErrorPage}/>
      </Switch>
      <Footer/>

    </>
  );
}

export default App;
