import { expect } from 'chai';
import request from 'supertest';
import baseURL from '../../env.js';
import DATA from '../../data/userData.js';

describe('Example of Post Request', () => {
    const response = request(baseURL())
       .post('/user')
       .send(DATA.CREATE_USER_DATA)

    it('Response Status is Equal to 200',async () => {
       // check response status harus sama dengan 200
       expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty'),async () => {
        // Expect dalam body terdapat value 'message'
        expect((await response).body).to.haveOwnProperty('message')
    }

    // Reporting in mochawesome
})