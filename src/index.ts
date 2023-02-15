import { registerPlugin } from '@capacitor/core';

import type { ScreenshotProtectPlugin } from './definitions';

const ScreenshotProtect = registerPlugin<ScreenshotProtectPlugin>('ScreenshotProtect', {
  web: () => import('./web').then(m => new m.ScreenshotProtectWeb()),
});

export * from './definitions';
export { ScreenshotProtect };
