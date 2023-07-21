import { createContext, useState } from "react";


const initialState = {
    isLoggedIn: false,
    user: null,
    posts: [],
    users: [],
  };
  

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(initialState.isLoggedIn);
    const [user, setUser] = useState(initialState.user);
    const [posts, setPosts] = useState(initialState.posts);
    const [users, setUsers] = useState(initialState.users);

    return (
        <AppContext.Provider
        value={{
            isLoggedIn,
            user,
            posts,
            users,
            setIsLoggedIn,
            setUser,
            setPosts,
            setUsers,
        }}
        >
        {children}
        </AppContext.Provider>
    );
};