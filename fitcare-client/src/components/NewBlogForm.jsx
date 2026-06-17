import React, { useState } from 'react';
import './NewBlogForm.css';

const NewBlogForm = ({ onBlogAdded }) => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    date: '',
    category: '',
    tags: '',
    image: '',
    excerpt: '',
    content: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setMessage('✅ Blog submitted successfully!');
        onBlogAdded(form); 
        setForm({
          title: '',
          author: '',
          date: '',
          category: '',
          tags: '',
          image: '',
          excerpt: '',
          content: ''
        });
      } else {
        setMessage('❌ Blog submission failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error occurred.');
    }
  };

  return (
    <div className="new-blog-form-container">
      <h3>📝 Create a New Blog Post</h3>
      {message && <p className="submission-message">{message}</p>}

      <form onSubmit={handleSubmit} className="new-blog-form">
        <input name="title" placeholder="Blog Title" value={form.title} onChange={handleChange} required />
        <input name="author" placeholder="Author Name" value={form.author} onChange={handleChange} required />
        <input name="date" placeholder="dd-mm-yyyy" value={form.date} onChange={handleChange} />
        <input name="category" placeholder="Category (e.g., AI, Wellness)" value={form.category} onChange={handleChange} />
        <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
        <input name="image" placeholder="Image URL or path" value={form.image} onChange={handleChange} />
        <textarea name="excerpt" placeholder="Short Excerpt" rows="2" value={form.excerpt} onChange={handleChange}></textarea>
        <textarea name="content" placeholder="Full Blog Content" rows="5" value={form.content} onChange={handleChange} required></textarea>
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default NewBlogForm;

