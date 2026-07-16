import _chai from 'isotropic-dev-dependencies/lib/chai.js';
import {
    Console as _Console
} from 'node:console';
import _console from '../lib/console.js';
import _test from 'node:test';
import _testConsole from 'test-console';

_test.describe('console', () => {
    _test.it('should be an instance of console', () => {
        _chai.expect(typeof _console).to.equal('object');
        _chai.expect(_console).to.be.an.instanceof(_Console);
    });

    _test.it('should log to stdout', () => {
        _chai.expect(_testConsole.stdout.inspectSync(() => {
            _console.log('test message stdout');
        })).to.deep.equal([
            'test message stdout\n'
        ]);
    });

    _test.it('should log to stderr', () => {
        _chai.expect(_testConsole.stderr.inspectSync(() => {
            _console.error('test message stderr');
        })).to.deep.equal([
            'test message stderr\n'
        ]);
    });

    _test.it('should sort object properties', () => {
        _chai.expect(_testConsole.stdout.inspectSync(() => {
            /* eslint-disable isotropic/sort-keys -- This is explicitly testing improperly sorted keys. */
            _console.log({
                test: 'property',
                anotherTest: 'property'
            });
            /* eslint-enable isotropic/sort-keys -- Reenable the rule. */
        })).to.deep.equal([
            '{\n  anotherTest: \'property\',\n  test: \'property\'\n}\n'
        ]);
    });

    _test.it('should sort object properties in natural numeric order', () => {
        _chai.expect(_testConsole.stdout.inspectSync(() => {
            /* eslint-disable isotropic/sort-keys -- This is explicitly testing improperly sorted keys. */
            _console.log({
                item10: 'a',
                item2: 'b',
                item1: 'c'
            });
            /* eslint-enable isotropic/sort-keys -- Reenable the rule. */
        })).to.deep.equal([
            '{\n  item1: \'c\',\n  item2: \'b\',\n  item10: \'a\'\n}\n'
        ]);
    });

    _test.it('should not limit the depth of nested objects', () => {
        const output = _testConsole.stdout.inspectSync(() => {
            _console.log({
                a: {
                    b: {
                        c: {
                            d: {
                                e: 'deep'
                            }
                        }
                    }
                }
            });
        });

        _chai.expect(output.length).to.equal(1);
        _chai.expect(output[0]).to.not.match(/\[Object\]/v);
        _chai.expect(output[0]).to.match(/e: 'deep'/v);
    });

    _test.it('should not truncate long arrays', () => {
        const output = _testConsole.stdout.inspectSync(() => {
            _console.log(Array.from({
                length: 130
            }, (value, index) => index));
        });

        _chai.expect(output.length).to.equal(1);
        _chai.expect(output[0]).to.not.match(/more item/v);
        _chai.expect(output[0]).to.match(/\b129\b/v);
    });
});
