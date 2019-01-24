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
      putSuccessMessage: '',
      putError: '',
      
    }  
  }
  
  componentDidMount(){
    console.log("CDM running")
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({friends:res.data}))
    .catch(err => console.log(err));
  }

  postNewFriend = (friend) =>{
    console.log(friend)
    axios.post('http://localhost:5000/friends', friend)
    .then(response => {
      console.log(response);
      this.setState({
        postSuccessMessage: response.data.successMessage,
        postError: "",
        friends: [
          ...this.state.friends,
          friend
        ]
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
    console.log(friend.id)
    console.log(`http://localhost:5000/friends/${friend.id}`)
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => {
        // console.log(this.state.friends)
        this.setState({
          deleteSuccessMessage: response.data.successMessage,
          deleteError: "",
          friends: this.state.friends,
        });
    })
    .catch(err => {
      this.setState({
        deleteSuccessMessage: "",
        deleteError: err.response.data.Error
      });
    });
  };
  putFriend = (friend) => {
    console.log(friend)
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          putSuccessMessage: response.data.successMessage,
          putError: "",
          friends: [
            ...this.state.friends,
            friend
          ]
        });
      })
      .catch(err => {
        this.setState({
          putSuccessMessage: "",
          putError: err.response.data.Error
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
         friends={this.state.friends}
         putFriend={this.putFriend}
         postSuccessMessage={this.state.postSuccessMessage}
         postError={this.state.postError}
         postNewFriend={this.postNewFriend}
         putSuccessMessage={this.state.putSuccessMessage}
         putError={this.state.putError}/>
      </div>
    );
  }
}

export default App;
