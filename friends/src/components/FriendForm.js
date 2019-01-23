import React from 'react';



class FriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newFriend: {
                name: '',
                age: null,
                email: '',
            }
        }
    }
    handleChange = ev => {
        ev.preventDefault();
        this.setState({ 
            newFriend:{
                ...this.state.newFriend,
                [ev.target.name]: ev.target.value }});
        if(ev.target.name === 'submit'){
            this.setState({submit: true})
            ev.target.value='';
        }
        // ev.target.value = '';
      }

      postNewFriend = e => {
        e.preventDefault();
        this.props.postNewFriend(this.state.newFriend);
      };

    render(){
        return(
            <form  onSubmit={this.props.postNewFriend}  className="friend-form">
            <label>
              Name:
              <input 
              onChange={this.handleChange}
              type="text" name="name" />
            </label>
            <label>
              Age:
              <input 
              onChange={this.handleChange}
              type="text" name="age" />
            </label>
            <label>
              Email:
              <input 
              onChange={this.handleChange}
              type="text" name="email" />
            </label>
            <input onClick={this.postNewFriend} className="submit" type="submit" name="submit" value="Submit" />
          </form>
        )

    }

}

export default FriendForm;