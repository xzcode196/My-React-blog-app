import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const IndividualPostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    body: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);

        return fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
        );
      })
      .then((res) => res.json())
      .then((userData) => setUser(userData))
      .catch((err) => console.error("Error fetching post/user:", err));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newComment.name || !newComment.body) {
      alert("Please fill in all fields");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newComment.name,
        body: newComment.body,
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments((prev) => [...prev, data]);

        setNewComment({ name: "", body: "" });
      })
      .catch((err) => console.error("Error posting comment:", err));
  };

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      {/* Post */}
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      {/* Author */}
      {user && (
        <p>
          <strong>Author:</strong> {user.name} ({user.email})
        </p>
      )}

      {/* Comments */}
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment, index) => (
          <div key={`${comment.id}-${index}`} style={{ marginBottom: "10px" }}>
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </div>
        ))
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <h4>Add a Comment</h4>

        <input
          type="text"
          placeholder="Your name"
          value={newComment.name}
          onChange={(e) =>
            setNewComment({ ...newComment, name: e.target.value })
          }
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
            padding: "8px",
          }}
        />

        <textarea
          placeholder="Your comment"
          value={newComment.body}
          onChange={(e) =>
            setNewComment({ ...newComment, body: e.target.value })
          }
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
            padding: "8px",
          }}
        />

        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default IndividualPostPage;