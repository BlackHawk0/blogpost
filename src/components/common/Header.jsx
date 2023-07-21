// import React from 'react';

// const Header = () => {
//   return (
//      <div className="px-2 py-3 space-y-2 font-medium text-slate-700">
//         <a
//         href="#"
//         className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
//         >
//         Home
//         </a>
//         <a
//         href="#"
//         className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
//         >
//         Feeds
//         </a>
//         <a
//         href="#"
//         className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
//         >
//         Pricing
//         </a>
//         <a
//         href="#"
//         className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
//         >
//         Contact
//         </a>
//     </div>
//   );
// };

// export default Header;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';

const Header = () => {
  const { isLoggedIn } = useContext(AppContext);
  const isPremiumUser = true; 
  console.log(isLoggedIn);

  const handleLogout = () => {
    // Clear any user-related data from local storage and reset isLoggedIn state
    // localStorage.removeItem('postsViewedToday'); // Clear postsViewedToday data
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/feeds">Feed</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/my-posts">My Posts</Link>
            </li>
            {isPremiumUser && (
              <>
                <li>
                  <Link to="/following">Following</Link>
                </li>
                <li>
                  <Link to="/premium">Premium</Link>
                </li>
                <li>
                  <Link to="/block-posts">Block Posts</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
