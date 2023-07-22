// import React, { createContext, useEffect, useState } from 'react';

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [profile, setProfile] = useState({});
//   const [following, setFollowing] = useState([]);

//   // Load users data from the API
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error('Error fetching users:', err));
//   }, []);

//   // Load posts data from the API
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error('Error fetching posts:', err));
//   }, []);

//   // Load profile data from local storage
//   useEffect(() => {
//     const isLoggedInFromLocalStorage = localStorage.getItem('isLoggedIn');
//     if (isLoggedInFromLocalStorage === 'true') {
//       setIsLoggedIn(true);
//     }
//     const profileData = localStorage.getItem('profile');
//     if (profileData) {
//       setProfile(JSON.parse(profileData));
//     }
//   }, []);

//   // Save the profile data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('profile', JSON.stringify(profile));
//   }, [profile]);

//     // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false); // Call the logout function in the context to set isLoggedIn to false
//     setProfile({}); // Clear the profile data from the context
//     localStorage.removeItem('isLoggedIn'); // Remove the isLoggedIn key from localStorage
//     localStorage.removeItem('profile'); // Remove the profile key from localStorage
//   };

//   // Function to handle follow/unfollow
//   const handleFollow = (userId) => {
//     if (following.includes(userId)) {
//       setFollowing(following.filter((id) => id !== userId)); // Unfollow the user
//     } else {
//       setFollowing([...following, userId]); // Follow the user
//     }
//   };

//   console.log(following); 

//   return (
//     <AppContext.Provider
//       value={{ isLoggedIn, setIsLoggedIn, users, setUsers, posts, setPosts, profile, setProfile, handleLogout,handleFollow,following }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };


import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [following, setFollowing] = useState([]);

  // Load following data from local storage on component mount
  useEffect(() => {
    const localStorageData = localStorage.getItem('following');
    if (localStorageData) {
      setFollowing(JSON.parse(localStorageData));
    }
  }, []);

  // Load users data from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  // Load posts data from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  // Load profile data from local storage
  useEffect(() => {
    const isLoggedInFromLocalStorage = localStorage.getItem('isLoggedIn');
    if (isLoggedInFromLocalStorage === 'true') {
      setIsLoggedIn(true);
    }
    const profileData = localStorage.getItem('profile');
    if (profileData) {
      setProfile(JSON.parse(profileData));
    }
  }, []);

  // Save the profile and following data to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('following', JSON.stringify(following));
  }, [profile, following]);

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); 
    setProfile({}); 
    setFollowing([]); 
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('profile'); 
    localStorage.removeItem('following'); 
  };

  // Function to handle follow/unfollow
  const handleFollow = (userId) => {
    if (following.includes(userId)) {
      setFollowing(following.filter((id) => id !== userId)); // Unfollow the user
    } else {
      setFollowing([...following, userId]); // Follow the user
      console.log(following); 
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        users,
        setUsers,
        posts,
        setPosts,
        profile,
        setProfile,
        handleLogout,
        handleFollow,
        following,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


