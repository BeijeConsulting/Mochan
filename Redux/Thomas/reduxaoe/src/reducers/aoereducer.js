const initialstate = {
    data :
        {civilizations : []},
        civildetails : '',
        unique_tech : '',
        unique_unit : ''
}

const AoEReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'CIVIL_LOAD':
            return {
                ...state,
                data : action.data
            };
        case 'CIVILDET_LOAD':
            return {
                ...state,
                civildetails : action.data
            };
        case 'UNTEC_LOAD' :
            return {
                ...state,
                unique_tech : action.data
            };
        case 'UNUN_LOAD' :
            return {
                ...state,
                unique_unit : action.data
            }
        default:
            return state;
    }
}

export default AoEReducer