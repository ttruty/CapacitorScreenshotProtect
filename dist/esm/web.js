import { WebPlugin } from '@capacitor/core';
export class ScreenshotProtectWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map