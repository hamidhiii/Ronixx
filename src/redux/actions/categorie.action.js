import api from "../../services/api/api";


export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'CATEGORIE_REQUEST' });
    try {
        const response = await api.get('/categories'); // пример запроса
        dispatch({ type: 'CATEGORIE_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'CATEGORIE_FAILURE', payload: error.message });
      }
    };
      