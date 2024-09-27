const request = require('supertest');
const app = require('./app'); // Assuming your app is exported

describe('POST /generateKundli', () => {
  it('should generate a Kundli for valid input', async () => {
    const response = await request(app)
      .post('/generateKundli')
      .send({
        userName: 'John Doe',
        userDateOfBirth: '1990-01-01',
        userTimeOfBirth: '10:00',
        userPlaceOfBirth: 'New York',
        gender: 'male',
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('kundli');
  });
});
