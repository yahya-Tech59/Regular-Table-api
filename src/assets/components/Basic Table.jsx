import React from "react";

export const BasicTable = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w3-container">
      <table className="w3-table-all" style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post?.id}</td>
              <td>{post?.title}</td>
              <td>{post?.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
