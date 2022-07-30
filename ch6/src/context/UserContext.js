import React, { useState, useContext } from "react";

const UserContext = React.createContext([]);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [logedUser, setLogedUser] = useState([])
return (
    <UserContext.Provider value={{logedUser, setLogedUser}}>
        {children}
    </UserContext.Provider>
)
}