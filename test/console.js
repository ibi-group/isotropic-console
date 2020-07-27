import _chai from 'chai';
import {
    Console as _Console
} from 'console';
import _console from '../js/console.js';
import _mocha from 'mocha';

_mocha.describe('console', () => {
    _mocha.it('should be an instance of console', () => {
        _chai.expect(_console).to.be.an('object');
        _chai.expect(_console).to.be.an.instanceof(_Console);
    });
});
