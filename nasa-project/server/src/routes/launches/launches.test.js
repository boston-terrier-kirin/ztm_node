const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test POST /launches', () => {
  const completeLaunchData = {
    mission: 'ZTM156',
    rocket: 'Explorer ZTM',
    launchDate: '2022/1/1',
    target: 'Kepler-186 f',
  };

  const launchDataWithoutDate = {
    mission: 'ZTM156',
    rocket: 'Explorer ZTM',
    target: 'Kepler-186 f',
  };

  const launchDataWithoutMission = {
    rocket: 'Explorer ZTM',
    launchDate: '2022/1/1',
    target: 'Kepler-186 f',
  };

  const launchDataWithoutRocket = {
    mission: 'ZTM156',
    launchDate: '2022/1/1',
    target: 'Kepler-186 f',
  };

  const launchDataWithoutTarget = {
    mission: 'ZTM156',
    rocket: 'Explorer ZTM',
    launchDate: '2022/1/1',
  };

  const launchWithInvalidDate = {
    mission: 'ZTM156',
    rocket: 'Explorer ZTM',
    launchDate: 'Hello',
    target: 'Kepler-186 f',
  };

  test('It should respond with 201 created', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const reqestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(reqestDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test('It should catch missing required property', async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: 'Missing required launch property.',
    });

    await request(app)
      .post('/launches')
      .send(launchDataWithoutMission)
      .expect('Content-Type', /json/)
      .expect(400);
    await request(app)
      .post('/launches')
      .send(launchDataWithoutRocket)
      .expect('Content-Type', /json/)
      .expect(400);
    await request(app)
      .post('/launches')
      .send(launchDataWithoutTarget)
      .expect('Content-Type', /json/)
      .expect(400);
  });

  test('It should catch invalid date', async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchWithInvalidDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({ error: 'Invalid launch date' });
  });
});
