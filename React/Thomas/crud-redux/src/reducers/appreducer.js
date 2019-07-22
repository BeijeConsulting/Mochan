const initialstate = {}
const AppReducers = (state = initialstate, action ) => {
    switch (action.type) {
        case 'FB_LOGIN' :
            return state = {
                ...state,
                loginfb : action.data
            }
        case 'ON_CHANGE' :
            return state = {
                ...state,
                inputdata : action.data
            }
        default :
            return state
    }
}
export default AppReducers