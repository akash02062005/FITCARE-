const express = require('express');
const router = express.Router();
const Music = require('../models/Music');
const musicLibrary = {
  energetic: [
    { title: "Beast Mode", link: "https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG" },
    { title: "Run It", link: "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed" },
    { title: "Believer", link: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
    { title: "Power", link: "https://www.youtube.com/watch?v=L53gjP-TtGE" },
    { title: "Stronger", link: "https://open.spotify.com/track/5jrdCoLpjsvHFCLHpJtbdB" },
    { title: "Centuries", link: "https://www.youtube.com/watch?v=LBr7kECsjcQ" },
    { title: "Can’t Hold Us", link: "https://www.youtube.com/watch?v=2zNSgSzhBfM" },
    { title: "Lose Yourself", link: "https://www.youtube.com/watch?v=_Yhyp-_hX2s" },
    { title: "Remember the Name", link: "https://www.youtube.com/watch?v=VDvr08sCPOc" },
    { title: "Eye of the Tiger", link: "https://www.youtube.com/watch?v=btPJPFnesV4" },
    { title: "‘Till I Collapse", link: "https://www.youtube.com/watch?v=Obim8BYGnOE" },
    { title: "Sicko Mode", link: "https://open.spotify.com/track/2xLMifQCjDGFmkHkpNLD9h" },
    { title: "All I Do is Win", link: "https://www.youtube.com/watch?v=GGXzlRoNtHU" },
    { title: "I’m Shipping Up to Boston", link: "https://www.youtube.com/watch?v=x-64CaD8GXw" },
    { title: "Can't Be Touched", link: "https://www.youtube.com/watch?v=2dTgoLfPaIs" },
    { title: "Turn Down for What", link: "https://www.youtube.com/watch?v=HMUDVMiITOU" },
    { title: "Work B**ch", link: "https://www.youtube.com/watch?v=pt8VYOfr8To" }
  ],
  calm: [
    { title: "Weightless – Marconi Union", link: "https://www.youtube.com/watch?v=UfcAVejslrU" },
    { title: "Evening Zen", link: "https://open.spotify.com/track/6pD0ufEQq0xdHSsRbg9LBK" },
    { title: "Yoga Flow", link: "https://www.youtube.com/watch?v=1ZYbU82GVz4" },
    { title: "Nature Vibes", link: "https://www.youtube.com/watch?v=xNN7iTA57jM" },
    { title: "Calm Piano", link: "https://open.spotify.com/track/7fATu8VfjYOTXZY2iGQCXA" },
    { title: "Spa Ambience", link: "https://www.youtube.com/watch?v=2OEL4P1Rz04" },
    { title: "Bamboo Forest", link: "https://www.youtube.com/watch?v=lFcSrYw-ARY" },
    { title: "Rain & Thunder", link: "https://www.youtube.com/watch?v=mv6FLafbGds" },
    { title: "Tibetan Bowls", link: "https://www.youtube.com/watch?v=OZ3dRVmDqMI" },
    { title: "Guided Meditation", link: "https://www.youtube.com/watch?v=inpok4MKVLM" },
    { title: "Soothing Wind", link: "https://www.youtube.com/watch?v=a2I9OeBqf_8" },
    { title: "Ocean Waves", link: "https://www.youtube.com/watch?v=1ZYbU82GVz4" },
    { title: "Ambient Chill", link: "https://open.spotify.com/track/7szUEbkPqUeDPQ0d0mfH8l" },
    { title: "Deep Sleep Music", link: "https://www.youtube.com/watch?v=1vx8iUvfyCY" },
    { title: "Relaxing Guitar", link: "https://www.youtube.com/watch?v=2OEL4P1Rz04" },
    { title: "Peaceful Mind", link: "https://www.youtube.com/watch?v=kFyvZwmyD9A" }
  ],
  cardio: [
    { title: "Levels – Avicii", link: "https://www.youtube.com/watch?v=_ovdm2yX4MA" },
    { title: "Uptown Funk", link: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { title: "Titanium", link: "https://www.youtube.com/watch?v=JRfuAukYTKg" },
    { title: "Shut Up and Dance", link: "https://www.youtube.com/watch?v=6JCLY0Rlx6Q" },
    { title: "Born to Run", link: "https://www.youtube.com/watch?v=f3t9SfrfDZM" },
    { title: "Stronger – Kelly Clarkson", link: "https://www.youtube.com/watch?v=Xn676-fLq7I" },
    { title: "Call On Me – Eric Prydz", link: "https://www.youtube.com/watch?v=L_fCqg92qks" },
    { title: "Rock You Like a Hurricane", link: "https://www.youtube.com/watch?v=sxdmw4tJJ1Y" },
    { title: "Don’t Stop Me Now", link: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
    { title: "Jump – Van Halen", link: "https://www.youtube.com/watch?v=SwYN7mTi6HM" },
    { title: "Eye of the Tiger", link: "https://www.youtube.com/watch?v=btPJPFnesV4" },
    { title: "Feel It Still", link: "https://www.youtube.com/watch?v=pBkHHoOIIn8" },
    { title: "Happy – Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { title: "Can’t Stop the Feeling", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
    { title: "Blinding Lights", link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
    { title: "Firework – Katy Perry", link: "https://www.youtube.com/watch?v=QGJuMBdaqIw" },
    { title: "Boom Clap", link: "https://www.youtube.com/watch?v=AOPMlIIg_38" }
  ]
};

const getRandomTracks = (arr, count = 3) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

router.post('/recommend', async (req, res) => {
  const { mood } = req.body;
  const moodKey = mood?.toLowerCase();
  const options = musicLibrary[moodKey] || musicLibrary.energetic;

  const selectedTracks = getRandomTracks(options, 3);

  try {
    const newEntry = new Music({ mood: moodKey, tracks: selectedTracks });
    await newEntry.save();
    res.json({ mood: moodKey, recommendations: selectedTracks });
  } catch (err) {
    console.error('❌ Music save error:', err);
    res.status(500).json({ error: 'Server error saving music' });
  }
});
module.exports = router;