const reducer = (state = [], action) => {

  switch(action.type) {
      case 'USER':
         return state.concat([action.data]);

      default:
        return state;
    }


export default reducer;
