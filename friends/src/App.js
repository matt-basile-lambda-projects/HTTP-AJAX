import React, { Component } from 'react';
import axios from 'axios';
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends:[],
      postsuccessMessage: '',
      posterrorMessage: '',
    }  
  }
  
  componentDidMount(){
    console.log("CDM running")
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({friends:res.data}))
    .catch(err => console.log(err));
  }

  postNewFriend = (friend) =>{
    axios.post('http://localhost:5000/friends', friend)
    .then(response => {
      console.log(response);
      this.setState({
        postSuccessMessage: response.data.successMessage,
        postError: ""
      });
    })
    .catch(err => {
      console.log(err);
      this.setState({
        postSuccessMessage: "",
        postError: err.response.data.Error
      });
  })}
  
  render() {
    return (
      <div className="App">
      <ul>
        {this.state.friends.map(friend =>{
          return <Friend key={friend.id} friend={friend}/>
        })}
      </ul>
        <FriendForm postNewFriend={this.postNewFriend}/>
      </div>
    );
  }
}

export default App;
