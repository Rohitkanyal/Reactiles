import React, { Component } from 'react';
import GuitarList from '../Containers/GuitarList.js';
import GuitarDetail from '../Containers/GuitarDetail.js'
export default class App extends Component{
  render(){
    return(
      <div className="co">
      <header>
         <h1>Guitar Reviews Blog</h1>
      </header>
      <div id="main_nav">

        <GuitarDetail />

      </div>
      <nav>
        <GuitarList />
      </nav>
      <footer>
        Copyright &copy; Chaitanya Potnis Reviews
      </footer>
      </div>
    );
  }
}
