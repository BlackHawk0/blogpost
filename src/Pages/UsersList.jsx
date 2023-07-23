import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const UsersList = () => {
  const { users, following, handleFollow } = useContext(AppContext);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow rounded-md p-4 flex items-center justify-between">
            <p className="text-lg font-semibold">{user.name}</p>
            <button
              onClick={() => handleFollow(user.id)}
              // onClick={() => alert('nmefinywa')}
              className={`px-4 py-2 rounded-md ${
                following.includes(user.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {following.includes(user.id) ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
