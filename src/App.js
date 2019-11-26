import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/nagavation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Api from './Api/gets';
import Csv from './Csv/files';

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
    <Navigation />
    <h1> SHIELD</h1>
    <Button className="Button" onClick ={this.fetchData}>Default</Button>
    <Button type ="button">Reset</Button>
    <Button className="mr-2 success">Success</Button>
    </div>
    <ul>
    {this.state.suggestion.length && ( this.state.suggestion.map(function(item){
        return(
          <li key={item.id}>{item.id} {item.title}</li>
        )
      }))}
    </ul>
    <Api />
    <Csv />
    </>
  );
}
}
export default App;
