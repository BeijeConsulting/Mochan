import React, { Component } from 'react';
import {connect} from 'react-redux';


class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
        console.log(data)
    }

    render(){
        return (
            <div>
                <h1> Create Post </h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter Post Title" ref={(input)=>this.getTitle = input }/><br/><br/>
                    <textarea required rows="5" cols="28" placeholder="Scrivi le tue cazzate" ref={(input) => this.getMessage = input }/><br/><br/>
                    <button> Posta le tue cazzate </button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);