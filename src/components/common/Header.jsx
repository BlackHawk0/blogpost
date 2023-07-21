import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn} = useContext(AppContext);
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
