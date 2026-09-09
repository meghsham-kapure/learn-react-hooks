import { useState, useEffect } from "react";

export default function FetchApi() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [pageOffset, setPageOffset] = useState(1);

  const fetchData = () => {
    console.log("Fetching api data");

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageOffset}}&_limit=10`,
    )
      .then((response) => response.json())
      .then((json) => setPosts([...json]));
  };

  useEffect(fetchData, [pageOffset]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-6xl w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Fetch API
      </h2>

      {/* Counter Section */}
      <div className="mb-6 p-4 w-full bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-800">
            Counter: <span className="text-blue-600">{counter}</span>
          </h1>
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="px-6 py-2 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Increment to {counter + 1}
          </button>
        </div>
      </div>

      {/* Next Page Button */}
      <div className="mb-6 w-full">
        <button
          onClick={() => setPageOffset((prev) => prev + 1)}
          className="px-6 py-3 w-full font-semibold text-white bg-green-500 duration-200 transition active:scale-95 hover:bg-green-600 rounded-lg"
        >
          Next 10 Posts (Page {pageOffset + 1})
        </button>
      </div>

      {/* Posts Grid */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="flex flex-col mx-10 my-5 p-6 max-w-md w-full bg-white border border-gray-200 shadow-lg duration-300 transition-shadow hover:shadow-xl rounded-2xl">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
        <span className="px-3 py-1 font-semibold text-blue-700 text-xs bg-blue-100 rounded-full">
          Post #{post.id}
        </span>
        <span className="text-gray-500 text-xs">User ID: {post.userId}</span>
      </div>

      <h3 className="mb-3 font-bold text-gray-800 text-lg line-clamp-2">
        {post.title}
      </h3>

      <p className="leading-relaxed text-gray-600 text-sm whitespace-pre-line">
        {post.body}
      </p>
    </div>
  );
}
