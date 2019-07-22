// import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authBegin = () => {
    return {
        type: actionTypes.AUTH_BEGIN
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};

export const nonceFetch = (nonce) => {
    return {
        type: actionTypes.NONCE_FETCH,
        nonceKey: nonce
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 500)
    }
}

export const auth = (email, password, alreadySigned) => {
    return dispatch => {
        dispatch(authBegin());
        // const authData = {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // };

        // let url = ''
        if (alreadySigned) {
            //   let nonceKey = null;

            window.alert('OK REGISTRAZIONE');
            window.location.reload();

            // IVO : NON CANCELLARE
            // axios.get('http://52.19.68.75/api/get_nonce/?controller=user&method=register')
            // .then(res => {
            //     console.log('nonceKey ', res.data.nonce);
            //     nonceKey = res.data.nonce
            //     dispatch(nonceFetch(res.data.nonce))
            // })
            // .then(function(){
            //   url = 'http://52.19.68.75/api/user/register/?username=' + authData.email + '&email=' + authData.email + '&display_name=' + authData.email + '&notify=both&user_pass=' + authData.password + '&insecure=cool&nonce=' + nonceKey;
            //   console.log(url)
            //   axios.get(url, authData)
            //       .then(res => {
            //           console.log('reg res ',res);
            //           if (res && res.data.status) {
            //              console.log("Registration OK! proceed with auto login...");
            //              console.log(res.data.cookie);
            //
            //              //login with the same credentials
            //              url = 'http://52.19.68.75/api/user/generate_auth_cookie/?username=' + authData.email + '&password=' + authData.password + '&insecure=cool';
            //              console.log(url)
            //              axios.get(url, authData)
            //                  .then(res => {
            //                      console.log(res);
            //                      if (res.data.status) {
            //                         console.log("OK");
            //                         console.log(res.data.cookie);
            //                         console.log(res.data.cookie_name);
            //                         document.cookie = res.data.cookie_name + '=' + res.data.cookie;
            //                         dispatch(authSuccess(res.idToken, res.localId));
            //                         window.location.reload();
            //                      } else {
            //                         console.log("KO");
            //                         //TODO: add an error message in popup
            //                      }
            //                  })
            //
            //           } else {
            //              console.log("KO");
            //              //TODO: add an error message in popup
            //           }
            //        })
            //        // .catch(res => {
            //        //   console.log('catch reg res ',res);
            //        // })
            // })

        } else {
            window.alert('OK LOGIN');
            window.location.reload();

            // IVO : NON CANCELLARE
            // url = 'http://52.19.68.75/api/user/generate_auth_cookie/?username=' + authData.email + '&password=' + authData.password + '&insecure=cool';
            // console.log(url)
            // axios.get(url, authData)
            //     .then(res => {
            //         console.log('log res ',res);
            //         if (res.data.status) {
            //            console.log("OK");
            //            console.log(res.data.cookie);
            //            console.log(res.data.cookie_name);
            //            document.cookie = res.data.cookie_name + '=' + res.data.cookie;
            //            dispatch(authSuccess(res.idToken, res.localId));
            //            window.location.reload();
            //         } else {
            //            console.log("KO");
            //            //TODO: add an error message in popup
            //         }
            //     })
        }

    }

};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const resetActiveChange = () => {
    return {
        type: actionTypes.RESET_ACTIVE_CHANGE
    }
}

export const exitActiveChange = () => {
    return {
        type: actionTypes.EXIT_ACTIVE_CHANGE
    }
}

export const authStateCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 500 ));
            };
        };
    };
};