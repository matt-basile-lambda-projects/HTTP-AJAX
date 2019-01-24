import React from 'react';


class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friend: props.friend,
        }
    }
    render(){
        return(
            <div className="friend-card">
                <h3>{this.state.friend.name}</h3>
                <p>{this.state.friend.age}</p>
                <a href={`mailto:${this.state.friend.email}`} >{this.state.friend.email}</a>
                <button onClick={() => this.props.deleteFriend(this.state.friend)}>Delete This Fake Friend</button>
                <button onClick={ e => this.props.populateFriend(e, this.state.friend.id)}>Edit This Friend</button>
            </div>
        )

    }

}

export default Friend