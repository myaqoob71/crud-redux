import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component{
handleEdit = (e) => {
    //Prevents page refresh
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
        newTitle,
        newMessage
    }
    this.props.dispatch({
        type:'UPDATE',
        id:this.props.post.id,
        data: data
    })
}
    render(){
        return(
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit = {this.handleEdit}>
                    <input type="text" placeholder="Enter Post Title" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} required /><br /><br />
                    <textarea rows="5" cols="28" placeholder="Enter Post" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} required/><br /><br />
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default connect() (EditComponent);