import React from 'react';


class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friend: props.friend,
        }
    }
    deleteFriend  = e => {
        console.log(e.target)
        e.preventDefault();
        this.props.deleteFriend(this.state.friend);
      };

    render(){
        console.log(this.state.friend)
        return(
            <div>
            <li>{this.state.friend.name}</li>
            <button onClick={this.deleteFriend}>Delete This Fake Ass Friend</button>
            </div>
        )

    }

}

export default Friend