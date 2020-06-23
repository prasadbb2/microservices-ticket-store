import request from 'supertest';
import {app} from "../../app";

it('should have a route handler listening to /api/tickets for post requests',async function () {
    const response = await request(app)
        .post('/api/tickets')
        .send({});

    expect(response.status).not.toEqual(404);
});

it('should can only be accessed when the user is signin',async function () {
    const response = await request(app)
        .post('/api/tickets')
        .send({});

    expect(response.status).toEqual(401);
});

it('should  return a status other than 401 if  the user is signed in', async function () {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({});

    expect(response.status).not.toEqual(401);
});

it('should return an error if an invalid title is provided',async function () {

});

it('should return an error if an invalid price is provided',async function () {

});

it('should create a ticket with valid input',async function () {

});

