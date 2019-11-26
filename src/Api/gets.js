import React from 'react';
import { Component, value} from 'react';
import {Button} from 'react-bootstrap';


class Api extends Component {
  constructor(props){
    super(props);
    this.state ={value: "" }
  }
  componentDidMount(){
  }
  fetchs = () => {
    fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
    .then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
}
render(){
  return(
    <>
    <div>
      <Button type ="Button" onClick ={this.fetchs}>Fetch</Button>
    </div>
    <div>
      <ul>
        {this.state.value.length && (this.state.value.map(function(item){
          return(
            <li key={item._id}>{item.title}</li>
          )
        }))}
      </ul>
    </div>
    </>
  )
}
}

export default Api;
