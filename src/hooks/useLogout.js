import { useAuthContext } from "./useAuthContext"
import { useItemsContext } from '../hooks/useitemscontext'

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch:itemsDispatch } = useItemsContext()

    const logout = () => {

        //remove user from local storage
        localStorage.removeItem('user')

        //update the logout user
        dispatch({type: 'LOGOUT'})
        itemsDispatch({type: 'SET_ITEMS', payload: null})
    }

    return {logout}
}