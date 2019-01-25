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
            <form  onSubmit={this.handleSubmit} className="friend-form w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 m-5">
            <h2 className="my-3">{this.props.isUpdating ? "Update Friend" : "Add New Buddy"}</h2>
              <input 
              onChange={this.props.handleChanges}
              type="text" 
              name="name"
              value={this.props.friend.name}
              placeholder="Name"
              className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              />
              <input 
              onChange={this.props.handleChanges}
              type="number"
              name="age"
              value={this.props.friend.age}
              placeholder="Age"
              className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
               />
              <input 
              onChange={this.props.handleChanges}
              type="text" 
              value={this.props.friend.email}
              placeholder="Email"
              name="email"
              className=" my-2 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              />
            <button onClick={this.handleSubmit} type="submit" className="submit w-4/5 mx-auto bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">{this.props.isUpdating ? "Update Friend" : "Add New Buddy"} </button>
          </form>
        )

    }

}

export default FriendForm;