import React from 'react';


class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friend: props.friend,
        }
    }
    render(){
        console.log(this.state.friend)
        return(
            <li>{this.state.friend.name}</li>
        )

    }

}

export default Friend