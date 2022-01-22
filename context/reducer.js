export const initialState = {
    modalOpen : false,
    modalName: '',
    openModal: () => {},
    closeModal: () => {},
    setModalName: (name) => {},
}

const appReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "OPEN_MODAL": 
            return {
                ...state,
                modalOpen: true
            }
        case "CLOSE_MODAL": 
            return {
                ...state,
                modalOpen: false
            }
        case "SET_MODAL_NAME": 
            return {
                ...state,
                modalName: payload
            }
        default: 
            throw new Error(`No case for type ${type}`);
    }
 

}

export default appReducer;