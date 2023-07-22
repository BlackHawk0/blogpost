import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/context';

const Feeds = () => {
  const { isLoggedIn, posts, setPosts } = useContext(AppContext);
  const [viewedPosts, setViewedPosts] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // State to keep track of the selected post
  const maxFreeViews = 20;
  const postsPerPage = 10; // Number of posts to display per page
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
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

  // Function to handle when a post is viewed or closed
  const togglePost = (post) => {
    if (selectedPost && selectedPost.id === post.id) {
      setSelectedPost(null); // Close the expanded post if it's clicked again
    } else {
      setSelectedPost(post); // Expand the post if it's clicked
    }
  };

  // Calculate the index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-6">
      <h3 className="text-center mb-3 text-xl font-semibold">Feed</h3>
      <div className="w-full max-w-3xl space-y-4">
        {isLoggedIn
          ? // If user is logged in, show all posts titles
            currentPosts.map((post, index) => (
              <div
                key={post.id}
                onClick={() => (showPaywall ? null : togglePost(post))}
                className={`cursor-pointer ${
                  showPaywall ? 'opacity-50 pointer-events-none' : 'opacity-100'
                } rounded-lg shadow-md p-4 bg-white transition ${
                  selectedPost && selectedPost.id === post.id
                    ? 'border-2 border-blue-500' // Border style for the expanded post
                    : ''
                }`}
              >
                <p className="text-blue-500 font-semibold text-xl">
                  {(currentPage - 1) * postsPerPage + index + 1}. {post.title}
                </p>
                {selectedPost && selectedPost.id === post.id && (
                  <div className="mt-2">
                    <p>{post.body}</p>
                  </div>
                )}
              </div>
            ))
          : // If user is not logged in, show only the first 20 posts titles
            currentPosts.slice(0, 20).map((post, index) => (
              <div
                key={post.id}
                onClick={() => (showPaywall ? null : togglePost(post))}
                className={`cursor-pointer ${
                  showPaywall ? 'opacity-50 pointer-events-none' : 'opacity-100'
                } rounded-lg shadow-md p-4 bg-white transition ${
                  selectedPost && selectedPost.id === post.id
                    ? 'border-2 border-blue-500' // Border style for the expanded post
                    : ''
                }`}
              >
                <p className="text-blue-500 font-semibold text-xl">
                  {(currentPage - 1) * postsPerPage + index + 1}. {post.title}
                </p>
                {selectedPost && selectedPost.id === post.id && (
                  <div className="mt-2">
                    <p>{post.body}</p>
                  </div>
                )}
              </div>
            ))}
      </div>
      {showPaywall ? (
        <div className="text-center mt-5">
          <h3 className="text-xl font-semibold">Paywall</h3>
          <p>Please subscribe to view more posts.</p>
        </div>
      ) : null}
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
