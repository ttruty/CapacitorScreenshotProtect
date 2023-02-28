'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const ScreenshotProtect = core.registerPlugin('ScreenshotProtect', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ScreenshotProtectWeb()),
});

class ScreenshotProtectWeb extends core.WebPlugin {
    protectScreen() {
        throw new Error('Method not implemented.');
    }
    disable() {
        throw new Error('Method not implemented.');
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ScreenshotProtectWeb: ScreenshotProtectWeb
});

exports.ScreenshotProtect = ScreenshotProtect;
//# sourceMappingURL=plugin.cjs.js.map
