import _chai from 'isotropic-dev-dependencies/lib/chai.js';
import {
    Console as _Console
} from 'node:console';
import _console from '../js/console.js';
import _mocha from 'isotropic-dev-dependencies/lib/mocha.js';
import _testConsole from 'test-console';

_mocha.describe('console', () => {
    _mocha.it('should be an instance of console', () => {
        _chai.expect(typeof _console).to.equal('object');
        _chai.expect(_console).to.be.an.instanceof(_Console);
    });

    _mocha.it('should log to stdout', () => {
        const output = _testConsole.stdout.inspectSync(() => {
            _console.log('test message');
        });

        _chai.expect(output).to.deep.equal([
            'test message\n'
        ]);
    });

    _mocha.it('should log to stderr', () => {
        const output = _testConsole.stderr.inspectSync(() => {
            _console.error('test message');
        });

        _chai.expect(output).to.deep.equal([
            '\u001b[31mtest message\u001b[39m\n'
        ]);
    });

    _mocha.it('should sort object properties', () => {
        /* eslint-disable isotropic/sort-keys
        --
        This is explicitly testing improperly sorted keys.
        */
        const output = _testConsole.stdout.inspectSync(() => {
            _console.log({
                test: 'property',
                anotherTest: 'property'
            });
        });
        /* eslint-enable isotropic/sort-keys
        --
        Reenable the rule.
        */

        _chai.expect(output).to.deep.equal([
            '{\n  anotherTest: \'property\',\n  test: \'property\'\n}\n'
        ]);
    });
});
