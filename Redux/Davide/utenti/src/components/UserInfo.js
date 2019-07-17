import React, { Component } from "react";

class UserInfo extends Component { 
    render() {
        var info;
        switch(this.props.stile) {
            case 'b':
                info = <b>{this.props.info}</b>;
                break;
            case 'i':
                info = <i>{this.props.info}</i>;
                break;
            case 'arr':
                var n=0;
                info = this.props.info.map((i)=> (<p key={n++} className="info-text">{i}</p>));
                break;
            default:
                info = <i>{this.props.info}</i>;
        }
        return (
            <div className="info-box">
                <span className="title-info">{this.props.title}</span>
                <div className="line-info"></div>
                {info}
            </div>
               
        );
    }
}
export default UserInfo;