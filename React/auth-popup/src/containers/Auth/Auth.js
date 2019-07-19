import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updObj, checkValidity } from '../../shared/utility';

import fbLogo from '../../assets/images/fb.png';
import labels from '../../assets/labels.json';


class Auth extends Component {
    state = {
            controls: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email address'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
            },
            controlsTwo: {
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 1
                    },
                    valid: false,
                    touched: false
                }
            },
        currentStep: 1,
        showSignButton: true,
        resetActive: false,
        // exitActive: false,
        checkboxActive : true,
        correctEmail: true,
        correctPassword: true,
        language: 0
    }

    inputChangedHandler = (event, email) => {
        if (this.state.currentStep === 2 && this.state.controlsTwo.password.validation.minLength === 1) {
            this.setState({
                controlsTwo: {
                    password: {
                        validation: {
                            minLength: 6
                        }
                    }
                }
            })
        } else if (this.state.currentStep === 1 && this.state.controlsTwo.password.validation.minLength === 6) {
            this.setState({
                controlsTwo: {
                    password: {
                        validation: {
                            minLength: 1
                        }
                    }
                }
            })
        }
        const updControls = updObj(this.state.controls, {
            email: updObj(this.state.controls.email, {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls.email.validation),
                touched: true
            })
        })
        this.setState({controls: updControls})
    }

    inputChangedHandlerTwo = (event, password) => {
        if (this.state.currentStep === 2 && this.state.controlsTwo.password.validation.minLength === 1) {
            this.setState({
                controlsTwo: {
                    password: {
                        validation: {
                            minLength: 6
                        }
                    }
                }
            })
        } else if (this.state.currentStep === 1 && this.state.controlsTwo.password.validation.minLength === 6) {
            this.setState({
                controlsTwo: {
                    password: {
                        validation: {
                            minLength: 1
                        }
                    }
                }
            })
        }
        const updControlsTwo = updObj(this.state.controlsTwo, {
            password: updObj(this.state.controlsTwo.password, {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controlsTwo.password.validation),
                touched: true
            })
        })
        this.setState({controlsTwo: updControlsTwo})
    }

    loginHandler = (event) => {
        event.preventDefault();
        event.target.keyCode === 13 && event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controlsTwo.password.value, this.state.newSign)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {newSign: !prevState.newSign};
        });
    }

    resetStepsHandler = () => {
        this.setState({
            currentStep: 1
        })
        this.setState(prevState => {
            return {newSign: !prevState.newSign};
        });
    }

    switchStepHandler = () => {
        this.setState({
            currentStep: this.state.currentStep + 1
    });
    }

    switchStepHandlerBack = () => {
        this.setState({
            currentStep: this.state.currentStep - 1
        });
    }

    showSignButtonHandler = () => {
        this.setState({
            correctPassword: true
        })
    }

    resetActiveHandler = () => {
        this.setState(prevState => {
            return {resetActive: !prevState.resetActive};
        });

        this.props.onResetActive(this.state.resetActive)
    }
    checkboxHandler = () => {
        this.setState(prevState => {
            return {checkboxActive: !prevState.checkboxActive};
        });
    }

    incorrectEmailButtonHandler = () => {
        this.setState({
            correctEmail: false
        })
    }

    incorrectPasswordButtonHandler = () => {
        this.setState({
            correctPassword: false
        })
    }

    render () {
        const formELementsArray = [];
        for (let key in this.state.controls){
            formELementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const formELementsArrayTwo = [];
        for (let key in this.state.controlsTwo){
            formELementsArrayTwo.push({
                id: key,
                config: this.state.controlsTwo[key]
            })
        }


        let form = <Spinner />
        let formRegistration1 = null;
        let formRegistration2 = <Spinner />

        if (!this.props.loading){
        form = (
        <div>
        {(formELementsArray.slice()).map(formElement => (
            <div key={formElement.id} className={classes.InputWidth}>
            <Input  key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            </div>
        ))}
        <div key={this.state.controlsTwo.id} className={classes.InputWidth}>
            <Input  key={this.state.controlsTwo.id}
                    elementType={this.state.controlsTwo.password.elementType}
                    elementConfig={this.state.controlsTwo.password.elementConfig}
                    value={this.state.controlsTwo.password.value}
                    invalid={!this.state.controlsTwo.password.valid}
                    shouldValidate={this.state.controlsTwo.password.validation}
                    touched={this.state.controlsTwo.password.touched}
                    changed={(event) => this.inputChangedHandlerTwo(event, this.state.controlsTwo.id)}/>
            </div>
        </div>
        )
    } else form = <Spinner />
            if (!this.props.loading){
                formRegistration1 = (formELementsArray.slice(0,1)).map(formElement => (
                    <div key={formElement.id} className={classes.InputWidth}>
                    <Input  key={formElement.id} elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                    </div>
                ))} else form = <Spinner />

            if (!this.props.loading){
                formRegistration2 =
                <div key={this.state.controlsTwo.id} className={classes.InputWidth}>
                <Input  key={this.state.controlsTwo.id}
                elementType={this.state.controlsTwo.password.elementType}
                        elementConfig={this.state.controlsTwo.password.elementConfig}
                        value={this.state.controlsTwo.password.value}
                        invalid={!this.state.controlsTwo.password.valid}
                        shouldValidate={this.state.controlsTwo.password.validation}
                        touched={this.state.controlsTwo.password.touched}
                        changed={(event) => this.inputChangedHandlerTwo(event, this.state.controlsTwo.id)}/>
                        </div>
            }
        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.newSign){
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        const signButton = this.state.showSignButton ?
            this.state.newSign && this.state.currentStep === 2 && !this.props.loading && this.state.controlsTwo.password.value.length > 5 ?
            <div>
                <Button buttonType="SuccessContinue" clickd={this.showSignButtonHandler}> COMPLETE SIGNUP </Button>
            <br/>
            <br/>
            </div> :
             this.state.newSign && this.state.currentStep === 2 && !this.props.loading && this.state.controlsTwo.password.value.length < 6  ?
            <div>
            <div className={classes.IncorrectPassButton} onClick={this.incorrectPasswordButtonHandler}> {'COMPLETE SIGNUP'} </div>
            <br/>
        </div> : null : null


        return (
            <div className={classes.Background}>
                <div className={classes.Auth}>
                    <div className={classes.Welcome}>
                        <br/>
                        {this.state.newSign ? (this.state.currentStep === 1 ? labels[this.state.language].createAccount : labels[this.state.language].welcomeMessage) : labels[this.state.language].welcomeMessage}
                    </div>
                    <div className={classes.LoginToAccess}>
                        {this.state.newSign ? (this.state.currentStep === 1 ?
                                                    <div>
                                                        {labels[this.state.language].getDiscountPre}&nbsp;<span className={classes.TenPercent}>SCONTO</span>&nbsp;{labels[this.state.language].getDiscountPost}
                                                    </div> : labels[this.state.language].completeSignup) : labels[this.state.language].loginToAccess}
                    </div>
                    {!this.state.correctEmail && this.state.currentStep === 1 && this.state.newSign ?
                        <div className={classes.IncorrectMailText}>
                            <br/>
                            Please enter your email address
                        </div> : !this.state.correctPassword && this.state.currentStep === 2 ?
                        <div className={classes.IncorrectMailText}>
                            <br/>
                            Please enter a password (min. length 6 digits)
                        </div> :
                        <div>
                    {authRedirect}
                    {errorMessage}
                    </div>}

                    {!this.state.correctPassword && this.state.currentStep === 1 && !this.state.newSign && !this.props.loading ?
                        <div className={classes.IncorrectMailText}>
                            Please enter your data
                        </div> : this.state.controls.email.value === '' && this.state.controls.email.touched ? <div className={classes.IncorrectMailText}>
                            Please enter an email
                        </div> :
                        <div>
                    {authRedirect}
                    {errorMessage}
                    </div>}
                    <form onSubmit={this.loginHandler} onKeyPress={e => {if (e.key === 'Enter') e.preventDefault();}}>
                        {this.state.newSign && this.state.currentStep === 1 ?
                            formRegistration1 : this.state.newSign && this.state.currentStep === 2 ? formRegistration2 : form }
                        <div className={classes.ResetPass} onClick={this.resetActiveHandler}>
                            {!this.state.newSign && !this.props.loading ? labels[this.state.language].resetPassword : null }
                        </div>
                        {!this.state.newSign && !this.props.loading && this.state.controls.email.value.length > 0 && this.state.controlsTwo.password.value.length > 0  ? <Button buttonType="Success">{labels[this.state.language].loginButton}</Button> :
                        !this.state.newSign && !this.props.loading ? <div><br /><div className={classes.IncorrectPassButtonLoginStyle} onClick={this.incorrectPasswordButtonHandler}> {labels[this.state.language].loginButton} </div></div> : null}
                        {signButton}
                        {!this.state.newSign && !this.props.loading ? <div>
                                <br/>
                                {labels[this.state.language].orLabel}
                                <br/>
                                <br/>
                                    <div className={classes.FB} onClick={
                                      function() {
                                        console.log('FB!!!');
                                        window.facebook_login();
                                      }
                                    }>
                                        {labels[this.state.language].facebookLogin}
                                        {<img src={fbLogo} alt="LOGO"  />}
                                    </div>
                                <br/>
                                <br/>
                        </div> : null}
                    </form>
                    <div >
                    {this.state.newSign && this.state.currentStep === 1 && this.state.showSignButton && this.state.controls.email.valid && this.state.controls.email.value.indexOf("@") > 1 && this.state.controls.email.value.indexOf(".") > this.state.controls.email.value.indexOf("@") + 2 && this.state.controls.email.value.indexOf(".") + 2 < this.state.controls.email.value.length && this.state.controls.email.value.match(/@/gi).length < 2 && this.state.checkboxActive  ?
                                                                                <div>
                                                                                <Button buttonType="SuccessContinue" clickd={this.switchStepHandler}>CONTINUE</Button>
                                                                                <br />
                                                                                </div> : this.state.newSign && this.state.currentStep === 1 ?
                                                                                <div>
                                                                                <Button buttonType="SuccessContinue" clickd={this.incorrectEmailButtonHandler}>CONTINUE</Button>
                                                                                <br />
                                                                                </div> : null
                                                                                }
                                                                                {this.state.newSign && this.state.currentStep === 1 ? <div className={classes.Newsletter}>

                            <br />
                            <input type="checkbox" defaultChecked="true" onChange={this.checkboxHandler} />
                            <div className={classes.YesIWould}>
                                <br />
                            Yes, I would like to see the latest listings, exclusive promotions and more via email.
                            </div>
                            <div className={classes.PrivacyPolicyText}>I have read and accepted the

                            <a className={classes.PrivacyPolicy} href="https://www.iubenda.com/privacy-policy/7828472/legal" target="_blank" rel="noopener noreferrer">Privacy Policy.</a>
                            </div>
                            <br />
                            <br />
                        </div> : null}
                        {this.state.newSign && this.state.currentStep === 1 ? <div>
                                                <br />
                                                <br />
                                                <br />
                                              </div> : null}
                        {!this.props.loading && this.state.currentStep !== 2 ?  <div className={classes.BottomPanel}>
                            <div className={classes.NeutralText}>
                            {this.state.newSign && !this.props.loading && this.state.currentStep === 1  ?
                            <div className={classes.AlreadyAnUser}>
                                Already have an account?
                            </div>
                                : !this.props.loading && this.state.currentStep === 1 ? labels[this.state.language].noAccountQuestion : null}
                            </div>
                            {this.state.newSign && !this.props.loading && this.state.currentStep === 1  ?
                            <Button
                                clickd={this.resetStepsHandler}
                                buttonType="LoginHere">Login here! </Button> : null}
                            {!this.state.newSign && !this.props.loading ? <Button
                                clickd={this.switchAuthModeHandler}
                                buttonType="Danger">{labels[this.state.language].signUpStep}</Button> : null}
                        </div> : null}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        newSign: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        resetActive: state.auth.resetActive
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, newSign) => dispatch(actions.auth(email, password, newSign)),
        onAuthRedirectPathSet: () => dispatch(actions.setAuthRedirectPath("/")),
        onResetActive: () => dispatch(actions.resetActiveChange()),
        onExitActive: () => dispatch(actions.exitActiveChange())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Auth, axios));
