import { registerPlugin } from '@capacitor/core';
const ScreenshotProtect = registerPlugin('ScreenshotProtect', {
    web: () => import('./web').then(m => new m.ScreenshotProtectWeb()),
});
export * from './definitions';
export { ScreenshotProtect };
//# sourceMappingURL=index.js.map