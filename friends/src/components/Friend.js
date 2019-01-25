import React from 'react';


class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        return(
            <div className="friend-card bg-white border my-6  flex-1 shadow-lg mx-2 border p-4 rounded">
                <h3 className="mb-2"> {this.props.friend.name}</h3>
                <p className="mb-2">Age: {this.props.friend.age}</p>
                <a className="mb-2 no-underline font-semibold text-purple-light" href={`mailto:${this.props.friend.email}`} >{this.props.friend.email}</a>
                <div className="flex justify-around w-4/5 my-3 mx-auto">
                    <button className="bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded" onClick={() => this.props.deleteFriend(this.props.friend)}>Delete</button>
                    <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"onClick={ e => this.props.populateFriend(e, this.props.friend.id)}>Edit</button>
                </div>
            </div>
        )

    }

}

export default Friend