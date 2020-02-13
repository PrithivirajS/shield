import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/nagavation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Api from './Api/gets';
import Csv from './Csv/files';
import Dropdown from './Dropdown/down';
import Ftp from './Ftp/path';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {suggestion: ""}
  }
  componentDidMount(){
    // For initial data
    // this.fetchData();
  }

  fetchData = () => {
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({ suggestion: data })
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    })
  }
  render() {
  return (
    <>
    <div className="App">
      <Dropdown />
          <div class="App-header">
              <h2> SHIELD</h2>
                  <Button className="ButtonAPI" onClick ={this.fetchData}>GetAPI</Button>
                  <ul>
                    {this.state.suggestion.length && ( this.state.suggestion.map(function(item){
                        return(
                          <li key={item.id}>{item.id} {item.title}</li>
                        )
                      }))}
                  </ul>
                  <Csv />
          </div>
    </div>

    </>
  );
}
}
export default App;
