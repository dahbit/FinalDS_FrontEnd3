import { createContext, useContext, useEffect, useReducer } from "react";
import { getCharacters } from "../service/getCharacters";


const initialState = {
  characters: [],
  favs: [],
};

const favsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return { ...state, characters: action.payload };
    case "ADD_TO_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FROM_FAVS":
      return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload) };
    default:
      return state;
  }
};

const FavContext = createContext();

export const FavsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favsReducer, initialState);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await getCharacters();
      if (characters) {
        dispatch({ type: "SET_CHARACTERS", payload: characters });
      }
    };
    fetchCharacters();
  }, []);

  const addToFavs = (character) => {
    dispatch({ type: "ADD_TO_FAVS", payload: character });
  };

  const deleteToFavs = (id) => {
    dispatch({ type: "DELETE_FROM_FAVS", payload: id });
  };

  return (
    <FavContext.Provider value={{ ...state, addToFavs, deleteToFavs }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavs = () => useContext(FavContext);
