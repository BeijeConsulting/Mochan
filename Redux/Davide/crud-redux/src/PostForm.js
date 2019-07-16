import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
          id: new Date(),
          title,
          message,
          editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Crea un Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required ref={(input)=>this.getTitle = input} type="text"  placeholder="Inserisci il titolo del post" /><br /><br />
                    <textarea required ref={(input)=>this.getMessage = input} rows="5" cols="28" placeholder="Inserisci il testo" /><br /><br />
                    <button>Invia</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);