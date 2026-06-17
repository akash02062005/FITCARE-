import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import './Blog.css';
import bloga from '../assets/images/bloga.jpg';
import blogb from '../assets/images/blogb.jpg';
import blogc from '../assets/images/blogc.jpg';
import blogd from '../assets/images/blogd.jpg';
import bloge from '../assets/images/bloge.jpg';
import blogf from '../assets/images/blogf.jpg';

const initialPosts = [
  {
    id: 1,
    title: 'The Rise of AI-Driven Personal Training',
    author: 'Akash S.',
    image: bloga,
    date: 'June 27, 2025',
    bio: 'Certified fitness coach & AI strategist at FitCare.',
    content: [
      "With every workout, AI learns your patterns and adapts.",
      "AI predicts fatigue and performance readiness using smart data.",
      "It tailors intensity and rest based on your feedback.",
      "Coaches and AI now collaborate for smarter training.",
      "Fitness aims at bringing mental stabiltiy and fitness."
    ]
  },
  {
    id: 2,
    title: 'Smart Nutrition: Designing Meals with Data',
    author: 'Dharshan VS',
    image: blogb,
    date: 'June 25, 2025',
    bio: 'Nutrition expert and AI wellness researcher.',
    content: [
      "AI adapts nutrition plans in real time.",
      "Tracks cravings and mood for smarter eating.",
      "Estimates calories from photos.",
      "Suggests food based on time, mood, and schedule.",
      "Take more proteins and carbs to improve energy and health."
      
     ]
  },
  {
    id: 3,
    title: 'Recovery is a Science: AI-Powered Rest Days',
    author: 'Dhanushya S',
    image: blogc,
    date: 'June 23, 2025',
    bio: 'Recovery specialist at FitCare.',
    content: [
      "AI tracks your sleep and stress to optimize rest.",
      "Recommends active rest or mindfulness breaks.",
      "Monitors recovery with HRV and heart rate.",
      "Ensures progress even during rest.",
      "Body recovery improves sleep cycle and melatonin secretion."
    ]
  },
  {
    id: 4,
    title: 'Coaching Smarter: Human + AI Synergy',
    author: 'Coach Afsal',
    image: bloge,
    date: 'June 21, 2025',
    bio: 'Strength coach at FitCare.',
    content: [
      "AI frees coaches to focus on technique and mindset.",
      "Smart dashboards simplify reports.",
      "AI and coaches work together to personalize training.",
      "AI improvises our coaching tenchinques.",
      "Health and lifestyle coaching improves body fitness and healthcare."
    ]
  },
  {
    id: 5,
    title: 'Inside FitCare: Building an AI for Everyone',
    author: 'FitCare Team',
    image: blogd,
    date: 'June 20, 2025',
    bio: 'Official product and tech writers of FitCare.',
    content: [
      "We built FitCare to be inclusive and human-first.",
      "It adapts to each user, learning daily habits.",
      "The platform is intuitive and empowering for all.",
      "Fitcare improvises the lifestyle of each person.",
      "What products are correctly bought can be used well.",
      "Products aim at bringing healthcare fitness."
    ]
  },
  {
    id: 6,
    title: 'AI & Mental Wellness: The Future of Balance',
    author: 'Karen',
    image: blogf,
    date: 'June 18, 2025',
    bio: 'Behavioral coach exploring AI motivation.',
    content: [
      "AI supports emotional health with mindfulness prompts.",
      "Mood journaling and breathing exercises included.",
      "Mental wellness is part of daily fitness now.",
      "Behaviour is solely affected by our hromone changes."
    ]
  }
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(initialPosts);
  const [activePost, setActivePost] = useState(initialPosts[0]);
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

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setMessage('✅ Blog submitted successfully!');
        const newBlog = {
          ...form,
          id: blogPosts.length + 1,
          image: form.image || blogf,
          bio: "Community Contributor",
          content: form.content.split('\n') 
        };
        setBlogPosts([...blogPosts, newBlog]);
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
        setMessage('❌ Failed to submit blog.');
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Server error occurred.');
    }
  };

  return (
    <PageWrapper>
      <div className="container py-5" style={{ marginTop: '90px' }}>
        <h2 className="text-center display-5 fw-bold mb-4">📰 FitCare AI Fitness Blog</h2>

        <div className="row">
          <div className="col-md-3 mb-4 d-none d-md-block">
            <div className="list-group shadow-sm">
              {blogPosts.map((post, idx) => (
                <button
                  key={idx}
                  className={`list-group-item list-group-item-action ${activePost?.title === post.title ? 'active' : ''}`}
                  onClick={() => setActivePost(post)}
                >
                  {post.title}
                </button>
              ))}
            </div>
          </div>

          
          <div className="col-md-9">
            {activePost && (
              <div className="card shadow-sm p-4 text-center">
                {activePost.image && (
                  <img
                    src={activePost.image}
                    alt="blog"
                    className="rounded-circle mx-auto mb-4"
                    style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                  />
                )}
                <h4>{activePost.author}</h4>
                <p className="text-muted">{activePost.bio}</p>
                <p className="text-secondary">{activePost.date}</p>
                <h5 className="fw-bold mt-3">{activePost.title}</h5>
                {activePost.content?.map((para, i) => (
                  <p key={i} className="text-muted" style={{ textAlign: 'centre' }}>{para}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="card mt-5 p-5 shadow-sm">
          <h4 className="text-center mb-4 fw-bold">📝 Create a New Blog Post</h4>
          {message && <div className="alert alert-info text-center">{message}</div>}

          <form className="mx-auto" onSubmit={handleFormSubmit} style={{ maxWidth: '700px' }}>
            <input className="form-control mb-3" name="title" value={form.title} onChange={handleFormChange} placeholder="Blog Title" required />
            <input className="form-control mb-3" name="author" value={form.author} onChange={handleFormChange} placeholder="Author Name" required />
            <input className="form-control mb-3" name="date" value={form.date} onChange={handleFormChange} placeholder="dd-mm-yyyy" />
            <input className="form-control mb-3" name="category" value={form.category} onChange={handleFormChange} placeholder="Category (e.g., AI)" />
            <input className="form-control mb-3" name="tags" value={form.tags} onChange={handleFormChange} placeholder="Tags (comma-separated)" />
            <input className="form-control mb-3" name="image" value={form.image} onChange={handleFormChange} placeholder="Image URL (optional)" />
            <textarea className="form-control mb-3" name="excerpt" value={form.excerpt} onChange={handleFormChange} placeholder="Short Excerpt" rows="2" />
            <textarea className="form-control mb-4" name="content" value={form.content} onChange={handleFormChange} placeholder="Full Blog Content (use line breaks)" rows="5" required />
            <div className="text-center">
              <button className="btn btn-primary px-4" type="submit">Submit Blog</button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Blog;
