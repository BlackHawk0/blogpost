import React, { useContext } from 'react';
import { AppContext } from '../../context/context';

const ProfilePage = () => {
  const { profile } = useContext(AppContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mx-auto max-w-md mt-8">
      <h1 className="text-3xl font-semibold mb-4">{profile.name}</h1>
      <p className="text-gray-600 mb-2">Username: {profile.username}</p>
      <p className="text-gray-600 mb-2">Email: {profile.email}</p>

      <div className="border-t border-gray-300 mt-6 pt-6">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p className="text-gray-600">
          {profile.address.street}, {profile.address.suite}
        </p>
        <p className="text-gray-600">
          {profile.address.city}, {profile.address.zipcode}
        </p>
        <p className="text-gray-600">Latitude: {profile.address.geo.lat}</p>
        <p className="text-gray-600">Longitude: {profile.address.geo.lng}</p>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-600">{profile.phone}</p>
        <p className="text-gray-600">{profile.email}</p>
        <p className="text-gray-600">{profile.website}</p>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-6">
        <h2 className="text-xl font-semibold mb-2">Company</h2>
        <p className="text-gray-600">Name: {profile.company.name}</p>
        <p className="text-gray-600">Catch Phrase: {profile.company.catchPhrase}</p>
        <p className="text-gray-600">Business: {profile.company.bs}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
