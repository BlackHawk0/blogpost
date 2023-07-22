// import React, { createContext, useState, useEffect } from 'react';

// const initialState = {
//   isLoggedIn: false,
//   user: null,
//   posts: [],
//   users: [],
// };

// export const AppContext = createContext(initialState);

// export const AppProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(initialState.isLoggedIn);
//   const [user, setUser] = useState(initialState.user);
//   const [posts, setPosts] = useState(initialState.posts);
//   const [users, setUsers] = useState(initialState.users);

//   // Save the state data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('appState', JSON.stringify({ isLoggedIn, user, posts, users }));
//   }, [isLoggedIn, user, posts, users]);

//   // Retrieve the state data from local storage on app startup
//   useEffect(() => {
//     const savedState = JSON.parse(localStorage.getItem('appState'));
//     if (savedState) {
//       setIsLoggedIn(savedState.isLoggedIn);
//       setUser(savedState.user);
//       setPosts(savedState.posts);
//       setUsers(savedState.users);
//     }
//   }, []);

//   return (
//     <AppContext.Provider
//       value={{
//         isLoggedIn,
//         user,
//         posts,
//         users,
//         setIsLoggedIn,
//         setUser,
//         setPosts,
//         setUsers,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };



import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, users, setUsers, posts, setPosts }}>
      {children}
    </AppContext.Provider>
  );
};
