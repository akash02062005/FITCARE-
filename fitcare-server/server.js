const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/fitcare')
.then(() => console.log('✅ MongoDB Connected to fitcare database'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.use('/api/diet', require('./routes/dietRoutes'));
app.use('/api/quiz', require('./routes/quizRoutes'));
app.use('/api/music', require('./routes/musicRoutes'));
app.use('/api/challenge', require('./routes/challengeRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.get('/', (req, res) => {
  res.send('🎯 FitCare API Server Running...');
});
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

