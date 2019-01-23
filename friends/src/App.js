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
      deleteSuccessMessage: '',
      deleteError: '',
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

  deleteFriend = friend => {
    console.log(friend)
    console.log(`http://localhost:5000/friends/${friend.id}`)
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
    .then(response => {
      this.setState({
        deleteSuccessMessage: response.data.successMessage,
        deleteError: ""
      });
    })
    .catch(err => {
      this.setState({
        deleteSuccessMessage: "",
        deleteError: err.response.data.Error
      });
    });
  };
  
  render() {
    return (
      <div className="App">
      <ul>
        {this.state.friends.map(friend =>{
          return <Friend 
          key={friend.id}
          friend={friend}
          deleteFriend={this.deleteFriend} 
          deleteError={this.state.deleteError}
          deleteSuccessMessage={this.state.deleteSuccessMessage}
          />
        })}
      </ul>
        <FriendForm 
         postSuccessMessage={this.state.postSuccessMessage}
         postError={this.state.postError}
         postNewFriend={this.postNewFriend}/>
      </div>
    );
  }
}

export default App;
