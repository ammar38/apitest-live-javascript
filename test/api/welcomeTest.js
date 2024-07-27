import { assert } from 'chai';
import app from '../../assert.js';

//Asserting 
//Cara menggunakan chai

describe('Welcome Test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(),"Welcome to QA Automation")
    })
})