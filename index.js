const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/generateKundli', async (req, res) => {
  const { userName, userDateOfBirth, userTimeOfBirth, userPlaceOfBirth, gender } = req.body;

  // Example: Call a third-party Kundli API
  try {
    const response = await axios.post('https://api.astrology.com/kundli', {
      name: userName,
      dateOfBirth: userDateOfBirth,
      timeOfBirth: userTimeOfBirth,
      placeOfBirth: userPlaceOfBirth,
      gender: gender,
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send("Error generating Kundli");
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
