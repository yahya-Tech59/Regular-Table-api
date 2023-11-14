import "./App.css";
import React, { useState, useEffect } from "react";
import { BasicTable } from "./assets/components/Basic Table";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //Get Current Posts
  const IndexOfLastPosts = currentPage * postsPerPage;
  const IndexOfFirstPage = IndexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(IndexOfFirstPage, IndexOfLastPosts);

  return (
    <>
      <div>
        <BasicTable posts={currentPosts} loading={loading} />
      </div>
    </>
  );
}

export default App;
