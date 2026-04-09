import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/pages/Navbar";
import BlogPostsPage from "./Components/pages/BlogPostsPage";
import IndividualPostPage from "./Components/blog/IndividualPostPage";
import ContactPage from "./Components/contact/ContactPage";

function App() {
  const [comments, setComments] = useState([]);

  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of my first blog...",
    },
    {
      id: 2,
      title: "Another Post",
      content: "More blog content here.",
    },
  ];

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <Router>
      <Header />
      <Navbar posts={posts} />
      <main className="container" style={{ padding: "20px" }}>
    <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/post/:id" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;