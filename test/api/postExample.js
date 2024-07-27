import request from 'supertest';
import baseURL from '../../env.js';

describe('Example of Post Request', () => {
    it('Success Create User',async () => {
       const response = request(baseURL())
       .post('/user')
       .send({
            "id": 12345,
            "username": "automoto",
            "firstName": "auto",
            "lastName": "moto",
            "email": "auto@mailsac.com",
            "password": "auto12345",
            "phone": "0857282635",
            "userStatus": 1
       })
       console.log((await response).status)
       console.log((await response).body)
    })
})