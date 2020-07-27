import _console from 'console';
import _naturalSort from 'isotropic-natural-sort';
import _process from 'process';

export default new _console.Console({
    inspectOptions: {
        breakLength: Infinity,
        colors: false,
        compact: false,
        customInspect: true,
        depth: Infinity,
        getters: false,
        maxArrayLength: Infinity,
        showHidden: false,
        showProxy: false,
        sorted: _naturalSort()
    },
    stderr: _process.stderr,
    stdout: _process.stdout
});
