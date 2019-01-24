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
            <div className="friend-card">
                <h3>{this.state.friend.name}</h3>
                <p>{this.state.friend.age}</p>
                <a href={`mailto:${this.state.friend.email}`} >{this.state.friend.email}</a>
                <button onClick={this.deleteFriend}>Delete This Fake Friend</button>
            </div>
        )

    }

}

export default Friend