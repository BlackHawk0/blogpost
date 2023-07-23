import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const FollowingPosts = () => {
  const { users, following, posts } = useContext(AppContext);

  console.log(following);
  // Get the posts of the users the authenticated user is following
  const followingPosts = posts.filter((post) => following.includes(post.userId));

  return (
    <div>
      <h1>Following</h1>
      {followingPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FollowingPosts;
