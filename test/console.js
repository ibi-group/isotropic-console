import _chai from 'isotropic-dev-dependencies/lib/chai.js';
import {
    Console as _Console
} from 'console';
import _console from '../js/console.js';
import _mocha from 'isotropic-dev-dependencies/lib/mocha.js';

_mocha.describe('console', () => {
    _mocha.it('should be an instance of console', () => {
        _chai.expect(typeof _console).to.equal('object');
        _chai.expect(_console).to.be.an.instanceof(_Console);
    });
});
