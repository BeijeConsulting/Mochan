import React, { Component } from 'react';
import './css/Comments.css';
import chat from './img/chat.svg'
import { connect } from 'react-redux'


class Comments extends Component {
    componentDidMount(){
        
    }

    back(){
        this.props.dispatch({
            type:'HIDE_COMMENTS',
            id:this.props.postId
        });
    }

    show(){
        var url = 'https://jsonplaceholder.typicode.com/comments?postId='+this.props.postId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.props.dispatch({
                    type:'LOAD_COMMENTS',
                    data : json,
                    id : this.props.postId
                });
            }
        )
    }

    renderComments(){
        const comments = this.props.comments.map((comment) =>
            <div key={comment.id} className="comment"><div className="comment-author">{comment.email}</div><div className="comment-text">{comment.body}</div></div>
        );
        return this.props.comment===1 ? 
            <div className="box-comments">
                {comments}
                <button className="back-comment" onClick={()=>this.back()}>
                    Nascondi i commenti
                </button>
            </div> 
            : 
            <button className="back-comment" onClick={()=>this.show()}>
                <img src={chat} alt="comment-icon" className="comment-icon"></img>
                Leggi i commenti
            </button>
        
    }

    render() {
        return (
                <div className="albums-box">
                    {this.renderComments()}
                </div>
        );
    }
}
export default connect()(Comments);