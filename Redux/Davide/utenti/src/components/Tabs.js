import React, { Component } from 'react';
import { connect } from 'react-redux'

class Tabs extends Component {
    select = (i) => {
        this.props.dispatch({
          type:'CHANGE_TAB',
          active: i
        });
    }
    renderTabs = () => {
        const hrefLink = '#'; 
        return React.Children.map(this.props.children, (item, i) => {
            if (i%2 === 0) {
              let active = this.props.active === i ? 'active' : '';
              return <a href={hrefLink} onClick={()=>this.select(i)} className={`${active} tab`}>{item}</a>;
            }
        });
    }
    
    renderContent() {
      return React.Children.map(this.props.children, (item, i) => {
        if (i-1 === this.props.active) {
          return <div className='content'>{item}</div>;
        } else {
          return;
        }
      });
    }
    
    render() {
      return (
        <div className="tabs">
          {this.renderTabs()}
          {this.renderContent()}
        </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
    return {
        active:state.active
    }
}
export default connect(mapStateToProps)(Tabs);