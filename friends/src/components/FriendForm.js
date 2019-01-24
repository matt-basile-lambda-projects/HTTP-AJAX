import React from 'react';



class FriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newFriend: props.newFriend
        }
    }
    //   postNewFriend = e => {
        
    //     this.props.postNewFriend(this.state.newFriend);
    //   };

    //   putFriend = e =>{
    //     e.preventDefault()
    //     this.props.putFriend(this.state.newFriend);
    //   }

    render(){
        console.log(this.props);
        return(
            <form  onSubmit={this.props.postNewFriend}  className="friend-form">
            <label>
              Name:
              <input 
              onChange={this.props.handleChanges}
              type="text" 
              name="name"
              value={this.props.newFriend.name}
              placeholder="Name"
              />
            </label>
            <label>
              Age:
              <input 
              onChange={this.props.handleChanges}
              type="number"
              name="age"
              value={this.props.newFriend.Age}
              placeholder="Age"
               />
            </label>
            <label>
              Email:
              <input 
              onChange={this.props.handleChanges}
              type="text" 
              value={this.props.newFriend.email}
              placeholder="Email"
              name="email" />
            </label>
            <input onClick={this.props.postNewFriend} className="submit" type="submit" name="submit" value="Submit Friend" />
            <input onClick={this.props.putFriend} className="submit" type="submit" name="submit" value="Update Friend" />
          </form>
        )

    }

}

export default FriendForm;