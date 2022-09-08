import action from "./action";

const initialState = {
   id: '',
   date: '',
   imgSrc: '',
   repositorList: '',
}

const reducer = (state = initialState, action) => {
   switch (action.type){
      case 'ADD_USER':
         return{...state,
         id: action.id,
         date: action.created_at,
         imgSrc: action.avatar_url,
         repositorList: action.repos_url,
         }
   };
   default:
      return state;
}

export default reducer;

