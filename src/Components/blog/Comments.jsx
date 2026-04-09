import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([
   // "Great post!",
    // "Very informative."
  ]); 
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment) return;
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '8px',
            fontFamily: 'inherit'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#0077cc',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      <div style={{ marginTop: '16px' }}>
        {comments.map((comment, index) => (
          <p
            key={index}
            style={{
              borderBottom: '1px solid #ccc',
              padding: '8px 0'
            }}
          >
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Comments;

