import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FbLogin, onChange} from '../actions/actions.js'

class Container extends Component {
    constructor(){
        super()
        this.LoginsuFb = this.LoginsuFb.bind(this)
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.onChangeHandlepw = this.onChangeHandlepw.bind(this)
    }

    LoginsuFb() {
        console.log(this.props)
        this.props.dispatch(FbLogin)
        console.log(this.props.state)
           return alert('Redirect to Fb')
        }

        onChangeHandle() {
        console.log(this.mail)
        this.props.dispatch(onChange(this.mail.name, this.mail.value))
            console.log(this.props.state)
        }

    onChangeHandlepw() {
        console.log(this.password)
        this.props.dispatch(onChange(this.pw.name, this.pw.value))
        console.log(this.props.state)
    }

    render() {
        console.log(this.props)
        return (
            <div>
            <h1>Benvenuto</h1>
            <h2>Accedi al tuo account</h2>
                <input type="text" placeholder='La tua mail' name='mail' ref={node => {this.mail = node}} onChange={this.onChangeHandle}/>
                <br/>
                <input type="password" placeholder='******' name='pw' ref={node => {this.password = node}} onChange={this.onChangeHandlepw}/>
                <div>Password dimenticata?</div>
                <br/>
                <button>Accedi</button>
                <p>Oppure</p>
                <button onClick={this.LoginsuFb}>Accedi con Facebook</button>
                <p>Non sei ancora registrato? <span>Registrati ora</span></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return { state: state}
}

export default connect(mapStateToProps)(Container)