import React from 'react';


class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        return(
            <div className="friend-card">
                <h3>{this.props.friend.name}</h3>
                <p>{this.props.friend.age}</p>
                <a href={`mailto:${this.props.friend.email}`} >{this.props.friend.email}</a>
                <button onClick={() => this.props.deleteFriend(this.props.friend)}>Delete This Fake Friend</button>
                <button onClick={ e => this.props.populateFriend(e, this.props.friend.id)}>Edit This Friend</button>
            </div>
        )

    }

}

export default Friend