import { createContext, useReducer } from 'react'

export const ItemsContext = createContext()

export const ItemsReducer = (state,action) => {

    switch (action.type) {
        case 'SET_ITEMS':
            return{
                items:action.payload
            }
            case 'CREATE_ITEMS':
                return{
                items:[action.payload, ...state.items]
                }
    
            default:
                return state
    }
}

export const ItemsContextProvider = ({ children }) => {

    const [state,dispatch] = useReducer(ItemsReducer, {
        items: null
    })

    dispatch({type: 'SET_ITEMS' , payload: [{}, {}] })

    return(
        <ItemsContext.Provider value={{...state, dispatch}}>
            { children }
        </ItemsContext.Provider>
    )
}

