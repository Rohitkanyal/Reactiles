import React, { Component } from 'react';
import {connect} from 'react-redux';
import {guitarSelect} from '../actions/Guitar_select.js';
import { bindActionCreators } from 'redux';

class GuitarList extends Component{
renderguitarlist(){
    return this.props.guitars.map((guitar)=>{

      return(
        <li onClick={()=>this.props.guitarSelect(guitar)} key={guitar.id}>{guitar.Type}</li>
      );
    });
}
  render(){
    return(
      <ul >
      {this.renderguitarlist()}
      </ul>
    );
  }
  //clickf(book){
  //  var x=book.Title;
  //  alert(x);
  //}
}


/*
function handle(book){
  var x = book.Title;
  alert(x);
}
*/
function mapstatetoprops(state){
  //Whatever value from this function will be returned the booklist class as props
  return{
    guitars:state.guitars
  };
}

function mapdispatchtoprops(dispatch){
  //Whenever the selectBook is called the result should be passed to the booklist
  //container.
  return bindActionCreators({guitarSelect:guitarSelect},dispatch);
}

//This function is used to make prop available to the booklist container in
//the form of dispatch
export default connect(mapstatetoprops,mapdispatchtoprops)(GuitarList);
