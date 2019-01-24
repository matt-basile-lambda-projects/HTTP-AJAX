import React, { Component } from 'react';
import axios from 'axios';
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'
import './App.css';


const clearedItem = {
  name: '',
  age: '',
  email: '',
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends:[],
      friend: {
        name: '',
        age: '',
        email: '',
      },  
      isUpdating: false,
    }  
  }
  
  componentDidMount(){ 
    console.log("CDM running")
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({friends:res.data}))
    .catch(err => console.log(err));
    
  }

  postFriend = () =>{
    axios.post('http://localhost:5000/friends', this.state.friend)
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data,
        friend:clearedItem
        });
    })
    .catch(err => console.log(err));
  }
  deleteFriend = friend => {
    console.log(friend.id)
    console.log(`http://localhost:5000/friends/${friend.id}`)
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => {
        console.log(response)
        this.setState({
          friends:response.data
        });
    })
    .catch(err => console.log(err));
  }
  populateFriend = (e, id) =>{
    e.preventDefault();
    this.setState({ friend: this.state.friends.find(friend => friend.id === id) });
    this.setState({ isUpdating: true });
  };
  updateFriend = () =>{
    console.log(this.state.friend)
    axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
    .then(res => {
      console.log(res.data)
      this.setState({
        friends:res.data,
        isUpdating: false,
        friend: clearedItem
      })
      
      this.props.history.push()
    })
    .catch(err => console.log(err));
  }


  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
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
          populateFriend = {this.populateFriend}
          />
        })}
      </ul>
        <FriendForm 
        isUpdating = {this.state.isUpdating}
         postFriend={this.postFriend}
         friend = {this.state.friend}
         friends={this.state.friends}
         handleChanges={this.handleChanges}
         updateFriend={this.updateFriend}
         />
      </div>
    );
  }
}

export default App;
