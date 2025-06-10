const initialState = {
    loading: false,
    products: [],
    error: null,
  };
  
  const categorieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CATEGORIE_REQUEST':
        return { ...state, loading: true };
      case 'CATEGORIE_SUCCESS':
        return { loading: false, products: action.payload, error: null };
      case 'CATEGORIE_FAILURE':
        return { loading: false, products: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default categorieReducer;
  