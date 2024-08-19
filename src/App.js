import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      person: {
        fullName: 'John Caesar',
        bio: 'A passionate software developer.',
        imgSrc: '/portfolio.png',
        profession: 'Software Developer'
      },
      show: false,
      timeSinceMount: 0
    };

    // Bind the toggle function
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Lifecycle method to set up the interval
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: Math.floor((new Date() - this.mountTime) / 1000)
      }));
    }, 1000);

    // Record the mount time
    this.mountTime = new Date();
  }

  // Lifecycle method to clear the interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle the show state
  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
