import React, {
    createContext,
    useState,
    useContext,
} from 'react';

const MenuContext = createContext();

export function useMenuContext() {
    return useContext(MenuContext);
}

export const MenuProvider = ({ children }) => { 
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MenuContext.Provider value={{ value, setValue, handleChange }}>
            {children}
        </MenuContext.Provider>
    );
}