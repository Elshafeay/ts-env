import app from '../../../app';
import supertest from 'supertest';

describe('Testing the users endpoint', function() {

  it('returns 200', async function() {
    // status code should be 200 `OK`
    await supertest(app)
      .get('/api/users')
      .expect(200);
  });

  it('returns the two users in the system', async function() {
    const response = await supertest(app)
      .get('/api/users');

    expect(response.body.length).toEqual(2);
  });

});