import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import ArticleContainer from './components/articles/articleContainer';
import ArticleGrid from './components/articles/articleGrid';
import {URL} from './config';
import axios from 'axios';

class App extends Component {
  state = {
    articles:[],
    
  }

  componentDidMount() {
    
    axios.get(`${URL}`)
    .then(response => {
        this.setState({
            articles:response.data.articles,
            
        })
  
      //  console.log(this.state.articles);
    })

  }
 

  render() {
    return (
      <div>
        <Header />
        <ArticleContainer news={this.state.articles} />
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))