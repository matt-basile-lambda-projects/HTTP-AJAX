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
      newFriend: {
        name: '',
        age: null,
        email: '',
      },
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

  postNewFriend = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => {
      console.log(response);
      this.setState({
        postSuccessMessage: response.data.successMessage,
        postError: "",
        friends: response.data
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
        console.log(response)
        this.setState({
          deleteSuccessMessage: response.data.successMessage,
          deleteError: "",
          friends:response.data
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
      .put(`http://localhost:5000/friends/`, friend)
      .then(response => {
        console.log(response)
        this.setState({
          putSuccessMessage: response.data.successMessage,
          putError: "",
          friends: response.data,
        });
      })
      .catch(err => {
        this.setState({
          putSuccessMessage: "",
          putError: err.response.data.Error
        });
      });
  };
  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [e.target.name]: e.target.value
        }
      };
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
        postNewFriend={this.postNewFriend}
        putFriend={this.putFriend}
         newFriend = {this.state.newFriend}
         friends={this.state.friends}
         handleChanges={this.handleChanges}
         />
      </div>
    );
  }
}

export default App;
