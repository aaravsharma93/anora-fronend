import { createContext } from "react";

export const UIContext = createContext({
    loading: false,
    setLoading: () => { }
})

export const UIContextProvider = ({ loading, setLoading, children }) => {
    return (
        <UIContext.Provider
            value={{
                loading: loading,
                setLoading: setLoading
            }}
        >
            {children}
        </UIContext.Provider>
    )
}