import React from 'react';



class FriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friend: props.friend
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.props.isUpdating){
            this.props.updateFriend();
        } else{
            this.props.postFriend();
        }
    }
    render(){
        return(
            <form  onSubmit={this.handleSubmit}  className="friend-form">
            <h2>{this.props.isUpdating ? "Update Friend" : "Add New Buddy"}</h2>
            <label>
              Name:
              <input 
              onChange={this.props.handleChanges}
              type="text" 
              name="name"
              value={this.props.friend.name}
              placeholder="Name"
              />
            </label>
            <label>
              Age:
              <input 
              onChange={this.props.handleChanges}
              type="number"
              name="age"
              value={this.props.friend.age}
              placeholder="Age"
               />
            </label>
            <label>
              Email:
              <input 
              onChange={this.props.handleChanges}
              type="text" 
              value={this.props.friend.email}
              placeholder="Email"
              name="email" />
            </label>
            <button onClick={this.handleSubmit} type="submit" className="submit">{this.props.isUpdating ? "Update Friend" : "Add New Buddy"} </button>
          </form>
        )

    }

}

export default FriendForm;