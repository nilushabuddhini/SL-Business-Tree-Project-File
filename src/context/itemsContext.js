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
            case 'DELETE_ITEMS':
                return{
                    items:state.items.filter((i) => i._id !== action.payload._id)
                }
    
              default:
                return state
    }
}

export const ItemsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ItemsReducer, {
        items: []
    })

    return(
        <ItemsContext.Provider value={{...state, dispatch}}>
            { children }
        </ItemsContext.Provider>
    )
}

