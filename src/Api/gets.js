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
    fetch("https://api-mib.ailiens.com/b/oms/returnStates",{
  'method' : 'GET',
  'headers': {
    'x-roles' : 'ROLE_BUSINESS_USER',
    'x-tenant-id' : '5f9d336a-eedb-4fa4-b408-cf38cefc96e0'
  }})
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
