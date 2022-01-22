import { createContext, useContext, useReducer } from 'react';
import  appReducer, { initialState } from './reducer';

const AppContext = createContext(initialState);

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const openModal = () => {
    dispatch({
      type: "OPEN_MODAL"
    })
  }

  const setModalName = (name) => {
    dispatch({
      type: "SET_MODAL_NAME",
      payload: name
    })
  }

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL"
    })
  }

  const value = {
    modalOpen: state.modalOpen,
    modalName: state.modalName,
    openModal, 
    closeModal,
    setModalName
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within AppContext');
  }

  return context;
}

export default useAppContext;