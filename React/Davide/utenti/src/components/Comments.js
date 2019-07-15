import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            json: [],
            comment : 0
        } 
    }

    componentDidMount(){
        var id =  this.props.postId;
        var url = 'https://jsonplaceholder.typicode.com/comments?postId='+id;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.setState({json : json});
            }
        )
    }

    back(){
        this.setState({comment:0});
    }

    renderComments(){
        const comments = this.state.json.map((comment) =>
            <div key={comment.id} className="comment"><div className="comment-author">{comment.email}</div><div className="comment-text">{comment.body}</div></div>
        );
        return this.state.comment===1 ? <div className="box-comments">{comments}<button className="back-comment" onClick={()=>this.back()}>Nascondi i commenti</button></div> : <button className="back-comment show" onClick={()=>this.setState({comment:1})}>Leggi i commenti</button>;
        
    }

    render() {
        
        return (
                <div className="albums-box">
                    {this.renderComments()}
                </div>
        );
    }
}
export default Comments;