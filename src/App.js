import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import quotes from './quotes.json';

function Button(props) {
  return (
    <button id="new-quote" 
            style={{backgroundColor: props.color}}
            onClick={props.handleSubmit}
            >New Quote</button>
  )
}

function ExternalLink(props) {
  return (
    <a className="button" 
       id={props.media} 
       target="_blank" 
       href="" 
       style={{backgroundColor: props.color}}>
       <i className={props.icon} />
    </a>
  )
}

function Quote(props) {
  return (
    <div id="quote-div" style={{color: props.color}}>
      <p id="quote">
        <i id="quote-left-icon" className="fa fa-quote-left" /> 
        {props.quote}
      </p>
      <p id="author">-{props.author}</p>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
      author: "Sheryl Sandberg",
      color: "#708090"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const randomQuote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
    const newHexColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.setState({
      quote: randomQuote[0],
      author: randomQuote[1],
      color: newHexColor
    });
  }

  render() {
    return (
      <div id="display" style={{backgroundColor: this.state.color}}>
        <div id="main">
          <Quote quote={this.state.quote} author={this.state.author} color={this.state.color}/>
          <div id="buttons">
            <div id="link">
              <ExternalLink media="tweet-quote" color={this.state.color} icon="fa fa-twitter" />
              <ExternalLink media="tumblr-quote" color={this.state.color} icon="fa fa-tumblr" />
            </div>
            <Button color={this.state.color} handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
