import React, { useContext, useEffect, useState } from 'react';
import RenderPost from './RenderPost';
import { AppContext } from '../context/context';

const Feeds = () => {
  const { isLoggedIn,posts, setPosts } = useContext(AppContext); 
  const [viewedPosts, setViewedPosts] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false); 
  const maxFreeViews = 20; 

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    // Load posts from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));

    // Check the number of posts viewed in local storage and set the state
    const postsViewedToday = parseInt(localStorage.getItem('postsViewedToday')) || 0;
    setViewedPosts(postsViewedToday);

    // Set the paywall display based on the number of posts viewed
    setShowPaywall(postsViewedToday >= maxFreeViews);
  }, []);

  useEffect(() => {
    // Save the number of posts viewed in local storage
    localStorage.setItem('postsViewedToday', viewedPosts.toString());

    // Set the paywall display based on the updated number of posts viewed
    setShowPaywall(viewedPosts >= maxFreeViews);
  }, [viewedPosts]);

  // Function to handle when a post is viewed
  const onViewPost = () => {
    if (viewedPosts < maxFreeViews) {
      setViewedPosts((prevViews) => prevViews + 1);
    }
  };

  return (
    <div>
      <h3 className="text-center mt-5 mb-3 text-xl font-semibold">Feed</h3>
      <div className="flex justify-center space-x-7 space-y-4 flex-wrap">
        {isLoggedIn
          ? // If user is logged in, show all posts
            posts.map((post) => <RenderPost key={post.id} post={post} />)
          : // If user is not logged in, show only the first 20 posts
            posts.slice(0, 20).map((post) => <RenderPost key={post.id} post={post} />)}
      </div>
      {showPaywall ? (
        <div className="text-center mt-5">
          <h3 className="text-xl font-semibold">Paywall</h3>
          <p>Please subscribe to view more posts.</p>
        </div>
      ) : null}
    </div>
  );
};

export default Feeds;
