/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */




/*import logo from './logo.svg';

import './App.css';

function App() {

return (

<div className="App">

<h1>Hello World...!</h1>

</div>

);

}

export default App; */

/*import React from 'react';

function Car()

{

return <h2>Hi, I am a Car!</h2>;

}

export default Car; 

import React from 'react';

import ReactDOM from 'react-dom';

function Car()

{

return <h2>I am a Car!</h2>;

}
`
function Garage()

{

return (

<>

<h1>Who lives in my Garage?</h1>

<Car />

</>

);

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Garage />);
import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this);  
      this.input = React.createRef();  
  }  
  updateSubmit(event) {  
      alert('You have entered the UserName and CompanyName successfully.');  
      event.preventDefault();  
  }  
  render() {  
    return (  
      <form onSubmit={this.updateSubmit}>  
        <h1>Uncontrolled Form Example</h1>  
        <label>Name:  
            <input type="text" ref={this.input} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label>  
        <input type="submit" value="Submit" />  
      </form>  
    );  
  }  
}  
export default App;  

import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      this.state = {value: ''};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({value: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfully: ' + this.state.value);  
      event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.value} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App;  */

function App() {
  return (
      <div>
          <h1>APP Component</h1>
      </div>
  );
}
export default App; 