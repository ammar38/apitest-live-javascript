import request from 'supertest';
import baseURL from '../../env.js';

describe('Welcome Test', () => {
    it('find pets By status',async () => {
       const response = request(baseURL())
       .get('/store/inventory')
       console.log((await response).status)
       console.log((await response).body)
    })
})