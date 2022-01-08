import app from '../../app';
import supertest from 'supertest';

describe('Testing the home page endpoint', function() {

  it('returns 200', async function() {
    // status code should be 200 `OK`
    await supertest(app)
      .get('/')
      .expect(200);
  });

});