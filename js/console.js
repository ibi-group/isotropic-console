import _console from 'node:console';
import _naturalSort from 'isotropic-natural-sort';
import _process from 'node:process';

const _sortFunction = _naturalSort();

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
        sorted: _sortFunction
    },
    stderr: _process.stderr,
    stdout: _process.stdout
});
