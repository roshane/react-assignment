import React, { Component } from 'react';
import SearchComponent from './SearchComponent';

export class App extends Component {

  constructor(props){
  	super(props);
  }

  render() {
    return (
      <div>
        <SearchComponent />
      </div>
    );
  }
}

