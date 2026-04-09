import React from "react";
import { Link } from "react-router";

const Navbar = ({ posts }) => {
  return (
    <nav
      style={{
        background: "#1976d2",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center", 
        gap: "30px"               
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>

      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          {post.title}
        </Link>
      ))}

      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;